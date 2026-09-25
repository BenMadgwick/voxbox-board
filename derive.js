// How a job's card is worked out from the jobs under it.
//
// The board used to draw a parent job as a card of its own, so F27 sat beside F27a and F27b
// and one piece of work looked like three (docs/design/D11-board-parents.md). Now only a
// top-level job is a card, and it is placed by the real work beneath it: a **task** is a job
// with no children, however deep (in F1 > F1a, F1b > F1a1, F1a2 the tasks are F1a1, F1a2 and
// F1b -- three of them; F1a is a grouping and is not one). A grouping's column, its state bar
// and its Needs Ben badge all come from the tasks under it, so a parent is never a hand-kept
// column that has to be remembered after every dispatch and merge.
//
// These functions are the whole of it, and they are here rather than in the page so that
// tools/board_check.js can check the page and tools/board_sync.ps1 against the same rules.
// board_sync.ps1 has the same six column rules again in PowerShell, because it writes the
// file the page reads; the two are kept in step by hand and both are checked.
//
//   var d = require("./docs/round/board/derive.js");   // node (tools/board_check.js)
//   window.VoxBoardDerive                              // the page (a <script> tag)
(function (root, factory) {
  var api = factory();
  if (typeof module === "object" && module.exports) module.exports = api;
  if (root) root.VoxBoardDerive = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  // The four states a task can be counted in, in the order the bar draws them. A task in any
  // other column (a concept can never be one, but a hand-added record might be) counts as
  // backlog, which is where the board would otherwise show it.
  var STATES = ["done", "doing", "todo", "backlog"];

  function byIdOf(jobs) {
    var m = {};
    jobs.forEach(function (j) { m[j.id] = j; });
    return m;
  }
  // Direct children, in board order. A job's children are found from its "parent" field, so a
  // folded-in report points at its home and appears here like any other child.
  function childrenOf(jobs, id) {
    return jobs.filter(function (j) { return j.parent === id; });
  }
  // Every task beneath a job, at every depth, groupings left out. A job with no children is
  // itself a task. The seen set is a guard, not a feature: a parent loop on a hand-edited
  // board would otherwise recurse until the tab falls over.
  function tasksUnder(jobs, id) {
    var out = [], seen = {};
    (function walk(here) {
      if (seen[here]) return;
      seen[here] = true;
      childrenOf(jobs, here).forEach(function (k) {
        if (childrenOf(jobs, k.id).length) walk(k.id);
        else out.push(k);
      });
    })(id);
    return out;
  }
  // A job is a card when nothing above it is on the board: no "parent", or a parent this
  // board has never heard of (a child whose parent was pruned is top-level again, and is
  // shown as itself rather than vanishing).
  function isTopLevel(byId, j) {
    return !j.parent || !byId[j.parent];
  }
  function topLevel(jobs) {
    var byId = byIdOf(jobs);
    return jobs.filter(function (j) { return isTopLevel(byId, j); });
  }

  // The state bar: one segment per state, in proportion to how many of this job's tasks are
  // in it. Closed tasks are left out -- a card in Closed is not news -- unless every task is
  // closed, when the whole bar is the closed grey. A job with no tasks has no bar at all.
  function barOf(jobs, id) {
    var tasks = tasksUnder(jobs, id);
    if (!tasks.length) return null;
    var counts = { done: 0, doing: 0, todo: 0, backlog: 0, closed: 0, total: tasks.length };
    tasks.forEach(function (t) {
      var k = (t.column === "closed" || STATES.indexOf(t.column) < 0) ? (t.column === "closed" ? "closed" : "backlog") : t.column;
      counts[k] += 1;
    });
    var segments;
    if (counts.closed === counts.total) segments = [{ state: "closed", n: counts.total }];
    else segments = STATES.filter(function (s) { return counts[s] > 0; })
      .map(function (s) { return { state: s, n: counts[s] }; });
    return { counts: counts, segments: segments, total: counts.total };
  }
  // The words in the bar's tooltip, so the numbers are readable without seeing the colours.
  var STATE_WORDS = { done: "done", doing: "in progress", todo: "to do", backlog: "in the backlog", closed: "closed" };
  function barTitle(bar) {
    if (!bar) return "";
    return bar.segments.map(function (s) { return s.n + " " + STATE_WORDS[s.state]; }).join(", ") +
      " (" + bar.total + (bar.total === 1 ? " task)" : " tasks)");
  }

  // A parent's column, from its tasks, by the first rule that matches (D11, section 1; the
  // same six in tools/board_sync.ps1, which writes them into jobs.js):
  //   1 every task closed                       -> closed
  //   2 every task done or closed, one done     -> done
  //   3 any task doing                          -> doing
  //   4 a task done while others are still open -> doing
  //   5 any task todo                           -> todo
  //   6 otherwise                               -> backlog
  // Rule 4 is Ben's, 2026-09-25: it forces us to address the fact that somebody started a
  // task under this job and it is incomplete -- either the rest gets done, or the job is
  // restructured so the finished part stands alone. The rule moves a parent backwards too
  // (a done job that gains a todo child goes back to doing), because the column is derived
  // and never hand-kept.
  function columnForTasks(tasks) {
    var n = tasks.length;
    if (!n) return null;
    var c = function (k) {
      return tasks.filter(function (t) { return t.column === k; }).length;
    };
    var closed = c("closed"), done = c("done"), doing = c("doing"), todo = c("todo");
    var open = n - closed;
    if (closed === n) return { column: "closed", closedAs: "Every task under it was closed." };
    if (done + closed === n && done > 0) return { column: "done" };
    if (doing > 0) return { column: "doing" };
    // Reached with a done task only when the rest are todo or backlog: started, not finished.
    if (done > 0 && open > 0) return { column: "doing" };
    if (todo > 0) return { column: "todo" };
    return { column: "backlog" };
  }
  // A parent whose own work shipped (its own merge, like B3, whose only child B4 was folded
  // into it and closed) stays done: rule 1 is for a parent with no merge of its own
  // (ben-3070#15's ruling at D11's merge; board_sync.ps1 does the same).
  function columnFor(jobs, id) {
    var got = columnForTasks(tasksUnder(jobs, id));
    var self = byIdOf(jobs)[id];
    if (got && got.column === "closed" && self && self.merged) return { column: "done" };
    return got;
  }

  // Needs Ben bubbles up: a top-level card shows the badge when the job itself, or anything
  // beneath it at any depth, is waiting on an answer (docs/round/questions/, copied into
  // "question" by board_sync). The shallowest waiting job is the one to name, because it is
  // the one the orchestrator has to answer first.
  function questionUnder(jobs, id) {
    var byId = byIdOf(jobs), seen = {};
    function walk(here) {
      if (seen[here]) return null;
      seen[here] = true;
      var j = byId[here];
      if (j && j.question) return j;
      for (var i = 0; i < jobs.length; i++) {
        if (jobs[i].parent === here) {
          var got = walk(jobs[i].id);
          if (got) return got;
        }
      }
      return null;
    }
    return walk(id);
  }
  // Every machine named by a job's open descendants, the open ones only: a finished task
  // keeps its own machine, but the Machine filter on a parent should follow the work that is
  // still going. Distinct, in board order.
  function machinesUnder(jobs, id) {
    var out = [];
    tasksUnder(jobs, id).forEach(function (t) {
      if (t.column !== "done" && t.column !== "closed" && t.machine && out.indexOf(t.machine) < 0) out.push(t.machine);
    });
    return out;
  }

  return {
    STATES: STATES,
    byIdOf: byIdOf,
    childrenOf: childrenOf,
    tasksUnder: tasksUnder,
    isTopLevel: isTopLevel,
    topLevel: topLevel,
    barOf: barOf,
    barTitle: barTitle,
    columnForTasks: columnForTasks,
    columnFor: columnFor,
    questionUnder: questionUnder,
    machinesUnder: machinesUnder
  };
});
