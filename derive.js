// How a job's card is worked out from the jobs under it.
//
// The board used to draw a parent job as a card of its own, so F27 sat beside F27a and F27b
// and one piece of work looked like three (docs/design/D11-board-parents.md). Now only a
// top-level job is a card, and it is placed by the real work beneath it: a **task** is a job
// with no children, however deep (in F1 > F1a, F1b > F1a1, F1a2 the tasks are F1a1, F1a2 and
// F1b -- three of them; F1a is a grouping and is not one). A grouping's column, its state bar
// and its Needs Input badge all come from the tasks under it, so a parent is never a hand-kept
// column that has to be remembered after every dispatch and merge. Since D14 the same
// everything-under-it idea gives a parent its size (tokensOf) and its models (modelsUnder).
// Since D15 the page's numbers count tasks rather than cards, a job's machines are read the
// same way, a card in Done never carries a needs badge, and the automatic in-flight status
// lines are listed here so both sides of the board can recognise them.
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
  // One segment's own tooltip, used when a segment is too narrow to hold its number: "3 in
  // progress" says the same thing without the digit being there to read.
  function segTitle(s) { return s.n + " " + STATE_WORDS[s.state]; }
  function barTitle(bar) {
    if (!bar) return "";
    return bar.segments.map(segTitle).join(", ") +
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

  // Needs Input bubbles up: a top-level card shows the badge when the job itself, or anything
  // beneath it at any depth, is waiting on an answer (docs/round/questions/, copied into
  // "question" by board_sync). Every waiting job is returned, in board order and depth-first
  // from the card, because since D12 a card can carry more than one (F22 waits on F22f's
  // ruling and F22s's question at the same time) and naming only one of them would hide the
  // other. The first is the one the orchestrator has to answer first, so it is the one a card
  // quotes in full.
  function questionsUnder(jobs, id) {
    var byId = byIdOf(jobs), seen = {}, out = [];
    (function walk(here) {
      if (seen[here]) return;
      seen[here] = true;
      var j = byId[here];
      if (j && j.question) out.push(j);
      jobs.forEach(function (k) { if (k.parent === here) walk(k.id); });
    })(id);
    return out;
  }
  function questionUnder(jobs, id) {
    return questionsUnder(jobs, id)[0] || null;
  }

  // --- The Needs Input tab (docs/design/D12-needs-input.md) -------------------------------
  //
  // Everything waiting on a person is one list: a ruling, a playtest, a check to write
  // together, something that needs a second machine. Each question file carries a kind and
  // the people who may answer it, copied into the record by board_sync; a file written before
  // that has neither, and is a decide for Ben -- which is what every question of the day was.
  var KINDS = ["decide", "play", "write", "try"];
  var KIND_WORDS = { decide: "for a decision", play: "to play it", write: "to write it together", try: "to try it" };
  // The group headings and the line under each, for the Needs Input tab. A ruling first,
  // because a ruling is what stops the most work.
  var KIND_TITLES = { decide: "Rulings and choices", play: "To play", write: "To write together", try: "To try" };
  var KIND_BLURB = {
    decide: "A decision only a person can make: a ruling, a value, a choice of plan.",
    play: "Something a person has to play, and say whether it is right.",
    write: "Something to be written with a person; a machine cannot do it on its own.",
    try: "Something that needs a person's own hands: a second machine, a second Steam account."
  };
  function kindOf(j) { return j && KINDS.indexOf(j.questionKind) >= 0 ? j.questionKind : "decide"; }
  function forOf(j) { return j && j.questionFor ? j.questionFor : "Ben"; }

  // The two rules that make an item "waiting", and for how long. Two days is the mark D12
  // sets: an item open that long is raised at Ben's next discussion, and nowhere else -- no
  // nagging. tools/machine.ps1 has the same number (Get-StaleAfter) for orch_status.ps1, so
  // the board and the list cannot disagree about which item is stale.
  var STALE_HOURS = 48;
  function waitedMs(askedUtc, now) {
    if (!askedUtc) return null;
    // "2026-09-25 05:46" is UTC, as every time on the board is; a date with no time is the
    // start of that day.
    var m = /^(\d{4})-(\d\d)-(\d\d)(?:[ T](\d\d):(\d\d))?/.exec(String(askedUtc));
    if (!m) return null;
    var t = Date.UTC(+m[1], +m[2] - 1, +m[3], m[4] ? +m[4] : 0, m[5] ? +m[5] : 0);
    if (isNaN(t)) return null;
    return (now === undefined ? Date.now() : now) - t;
  }
  function isStale(askedUtc, now) {
    var w = waitedMs(askedUtc, now);
    return w !== null && w >= STALE_HOURS * 3600 * 1000;
  }
  // How long it has waited, in words a person reads at a glance: "3 days", "5 hours".
  function waitedFor(askedUtc, now) {
    var w = waitedMs(askedUtc, now);
    if (w === null) return "an unknown time";
    if (w < 0) return "not yet";
    var h = w / 3600000;
    if (h < 1) return "under an hour";
    // Hours up to three days: a wait of 42 hours reads as 42 hours, not "1 day" beside a
    // mark that calls two days stale.
    var d = h / 24;
    if (h < 72) { var hh = Math.floor(h); return hh + (hh === 1 ? " hour" : " hours"); }
    var dd = Math.floor(d);
    return dd + (dd === 1 ? " day" : " days");
  }
  // What a waiting job holds up: its own **Blocking:** line, and every job whose
  // **Blocked by:** names it -- the two ends are kept in step by hand (docs/round/BOARD.md),
  // so a reader can see either way round. Distinct, in board order.
  function blocksOf(jobs, id) {
    var byId = byIdOf(jobs), out = [];
    (byId[id] && byId[id].blocking || []).forEach(function (b) { if (out.indexOf(b) < 0) out.push(b); });
    jobs.forEach(function (j) {
      if (j.blockedBy && j.blockedBy.indexOf(id) >= 0 && out.indexOf(j.id) < 0) out.push(j.id);
    });
    return out;
  }
  // The card a job is shown on: the top-level job above it, at any depth, which is the only
  // thing the board draws (D11). A job with no parent is its own card.
  function cardOf(jobs, id) {
    var byId = byIdOf(jobs), here = byId[id], seen = {};
    while (here && here.parent && byId[here.parent] && !seen[here.id]) {
      seen[here.id] = true;
      here = byId[here.parent];
    }
    return here ? here.id : id;
  }
  // Every machine that has had a hand in a job: the machine on the job itself (its claim, or
  // the machine its brief is for), every machine in its "involved" list, and the same again
  // for everything beneath it, at every depth. Distinct, in the order the tree is walked.
  //
  // More than one is the normal case and the reason this exists: a task can be built on one
  // machine and reviewed, repaired or merged on another, and before D15 a card could only
  // ever name one of them (the last "implemented" entry) or, for a parent, the machines of
  // its *open* tasks. Nothing here is written by hand -- it is read out of the record, which
  // is what keeps the machine list from being a field somebody has to remember to fill in.
  function machinesAllOf(jobs, id) {
    var byId = byIdOf(jobs), out = [], seen = {};
    (function walk(here) {
      if (seen[here]) return;
      seen[here] = true;
      var j = byId[here];
      if (!j) return;
      if (j.machine && out.indexOf(j.machine) < 0) out.push(j.machine);
      // The machine a claim was handed over from (board_sync's "handedFrom", from takes_over).
      if (j.handedFrom && out.indexOf(j.handedFrom) < 0) out.push(j.handedFrom);
      (j.involved || []).forEach(function (e) {
        if (e.machine && out.indexOf(e.machine) < 0) out.push(e.machine);
      });
      childrenOf(jobs, here).forEach(function (k) { walk(k.id); });
    })(id);
    return out;
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

  // --- A parent's size, and its models (docs/design/D14-board-parent-rollups.md) ---------
  //
  // Two things Ben cannot see from a card: how big the work under it was, and which models
  // touched it at all. Both are the same kind of thing -- everything beneath a job, at every
  // depth, added up or collected -- and both are here rather than in the page so that
  // tools/board_check.js can check the page against them.

  // How big the work under a job was: its own tokens plus every descendant's, at every depth,
  // groupings included (a grouping usually has none of its own, but if a run was recorded
  // against it, it counts). soFar says the figure is only what has been spent so far, because
  // something under it has not merged. Note what it can and cannot count: board_sync.ps1 writes
  // a job's tokens only once that job has merged (D13's rule, that a card in flight is not
  // spent yet), so a parent still in progress counts the tasks that have finished and not the
  // run happening now.
  function tokensOf(jobs, id) {
    var byId = byIdOf(jobs), seen = {}, total = 0, soFar = false, counted = 0;
    (function walk(here) {
      if (seen[here]) return;
      seen[here] = true;
      var j = byId[here];
      if (!j) return;
      if (j.tokens) { total += j.tokens; counted += 1; }
      if (j.column !== "done" && j.column !== "closed") soFar = true;
      childrenOf(jobs, here).forEach(function (k) { walk(k.id); });
    })(id);
    return { total: total, soFar: soFar, jobs: counted };
  }

  // Which models have touched a job: every model named in the "involved" list of the job
  // itself or of anything beneath it, at every depth. Distinct, in the order the tree is
  // walked -- the job's own entries first, then its children, each in the order the ledger
  // put them down. No counts and no shares: only which, because the question Ben is asking
  // is who was ever on this job, and one model on its own is worth following up.
  function modelsUnder(jobs, id) {
    var byId = byIdOf(jobs), out = [], seen = {};
    (function walk(here) {
      if (seen[here]) return;
      seen[here] = true;
      var j = byId[here];
      if (!j) return;
      (j.involved || []).forEach(function (e) {
        if (e.model && out.indexOf(e.model) < 0) out.push(e.model);
      });
      childrenOf(jobs, here).forEach(function (k) { walk(k.id); });
    })(id);
    return out;
  }
  // The one model, when there is exactly one: a job only one model ever touched is the case
  // the page marks, so that a single-model job stands out in a column of mixed ones.
  function onlyModelUnder(jobs, id) {
    var m = modelsUnder(jobs, id);
    return m.length === 1 ? m[0] : null;
  }

  // --- Done never says "needs" (docs/design/D15-board-task-parity.md) ---------------------
  //
  // A merged job is finished, so a card in Done must not read as though it were still going to
  // be built, and must not carry a Needs Input badge. The open question itself is not touched:
  // it stays in the record, in the Needs Input tab and in the job's own dialog, because a
  // playtest of merged work is a real thing to be waiting for (B1e, F24b). What goes is the
  // claim on the card, which is what a reader skims.
  //
  // The badge bubbles up from a job to the card above it, so the rule is about the card's own
  // column: a card in Done carries no badge even when a task under it is waiting, and a card
  // that is not in Done still carries one for a waiting task that has merged.
  function badgeUnder(jobs, id) {
    if ((byIdOf(jobs)[id] || {}).column === "done") return [];
    return questionsUnder(jobs, id);
  }
  // The lines board_sync.ps1 writes while a job is still in flight, which are the only lines
  // that are ever both automatic and true of a merged job by accident. F25 read "Being built
  // by OpenRouter ... on Ben's Win" in Done, and D9 and D12 "Claimed by ...; starting.": a
  // record whose statusAuto already said merged:<date> and whose text had not caught up.
  // tools/board_sync.ps1 matches the same list, and rewrites a merged job's line to
  // "Merged <date>." when it finds one.
  var IN_FLIGHT = /^(Being built by |Claimed by .*; starting\.|In its repair round\.|Built; reviewed by |Researched by |Queued for |Brief ready)/;
  function isInFlightStatus(s) { return !!s && IN_FLIGHT.test(String(s)); }

  // --- The counts count tasks, not cards (D15) --------------------------------------------
  //
  // D11 made every number on the page a count of cards, which undersells the work: a parent
  // in progress with two tasks in progress and six done showed "1 in progress, 0 done" for
  // eight pieces of work. A count that means something has to count what was done, so a
  // number is now a count of **tasks** -- leaves, at any depth -- each in its own state. A
  // parent contributes to a column by its tasks and not by itself, so the last two finishing
  // moves the parent into Done *and* puts all eight in Done, rather than replacing eight with
  // one. The cards a tab shows do not change: that is still D11's placement, one card per
  // top-level job.
  //
  // The list of cards is the page's business (it has the filters), so the cards are an
  // argument; what is counted here is one task each, in the state that task is in.
  // keep, when given, says which tasks count: the page's filters (a card shown because one
  // task under it matched does not bring the rest of its tree into the numbers).
  function countTasksByState(jobs, cardIds, keep) {
    var byId = byIdOf(jobs), n = { all: 0 };
    ["backlog", "todo", "doing", "done", "closed", "concepts"].forEach(function (k) { n[k] = 0; });
    (cardIds || []).forEach(function (id) {
      // A top-level job with no children is itself a task (D11), and tasksUnder() only walks
      // children -- so it is counted here, or every single task on the board would be missing
      // from every number on the page.
      var ts = childrenOf(jobs, id).length ? tasksUnder(jobs, id) : (byId[id] ? [byId[id]] : []);
      ts.forEach(function (t) {
        if (keep && !keep(t, byId[id])) return;
        n.all += 1;
        if (n[t.column] !== undefined) n[t.column] += 1;
      });
    });
    return n;
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
    segTitle: segTitle,
    questionUnder: questionUnder,
    questionsUnder: questionsUnder,
    KINDS: KINDS,
    KIND_WORDS: KIND_WORDS,
    KIND_TITLES: KIND_TITLES,
    KIND_BLURB: KIND_BLURB,
    kindOf: kindOf,
    forOf: forOf,
    STALE_HOURS: STALE_HOURS,
    waitedMs: waitedMs,
    isStale: isStale,
    waitedFor: waitedFor,
    blocksOf: blocksOf,
    cardOf: cardOf,
    machinesUnder: machinesUnder,
    tokensOf: tokensOf,
    modelsUnder: modelsUnder,
    onlyModelUnder: onlyModelUnder,
    machinesAllOf: machinesAllOf,
    badgeUnder: badgeUnder,
    isInFlightStatus: isInFlightStatus,
    countTasksByState: countTasksByState
  };
});
