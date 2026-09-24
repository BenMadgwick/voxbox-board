window.VOX_BOARD = {
"updated": "2026-09-24 15:35 UTC",
"machines": {
  "ben-3070": "Ben's Win (RTX 3070 8GB)",
  "james-3080": "James Win (RTX 3080 10GB)",
  "sam-linux": "Sam's Linux (RTX 5080 16GB)"
},
"rounds": [{"name":"Round 1","from":"the build 9 playtest, 20 September 2026: four players over Steam","started":"2026-09-21"}],
"jobs": [

{"id": "F1", "title": "In-game chat, with /bug and /idea", "round": "Round 1", "column": "done", "kind": "feature", "origin": "Feedback from the build 9 playtest arrived scattered across two Discord threads and Ben's own notes. Before anything else, the team wanted a way to report bugs and ideas from inside the game, so nothing gets lost.", "raisedBy": "Ben", "summary": "Press T to chat with everyone in the game. Start a line with /bug or /idea and it is saved as a report on every player's machine, along with the tool you were holding, so nobody has to collect reports by hand afterwards.", "status": "Merged after one repair round that fixed all seven review findings. Escape and chat-mid-gesture were checked by reading the engine code, not yet by pressing keys.", "forPlaytesters": "Press T, type something, then press Escape to back out. Try opening chat in the middle of a grab or a charged throw and check nothing gets stuck. Use /bug and /idea freely: that is how the next round gets made. Known: the typing box sits a little left of the chat lines.", "repairRounds": 1, "dispatched": "2026-09-21 20:05", "merged": "2026-09-21 23:11", "workMinutes": 70, "tokens": 37523399, "tokensWritten": 322821,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B8", "title": "You can see your pool job's progress", "round": "Round 1", "column": "done", "kind": "bug", "origin": "A player who sent a picture to the shared generator pool from a joining machine saw no progress for it at all.", "raisedBy": "a playtester", "summary": "Your own generation jobs now show their progress on the screen, even when another player's GPU is doing the work.", "status": "Merged with no repair round. Checked with a two-player script and a screenshot.", "forPlaytesters": "Without a generator of your own, send a picture to the pool and watch your progress line.", "repairRounds": 0, "dispatched": "2026-09-21 20:10", "merged": "2026-09-21 20:41", "workMinutes": 29, "tokens": 14839414, "tokensWritten": 79668,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B13", "title": "Slice cuts only where the blade went", "round": "Round 1", "column": "done", "kind": "bug", "origin": "Slice cut along an endless plane: cutting the goblin's weapon took off part of his head.", "raisedBy": "Ben", "summary": "A cut now stops at the ends of your swipe. A short swipe that doesn't go all the way through cuts a notch instead of splitting the object in two.", "status": "Merged. Claude fixed one problem in review (a notched object spun). The notch was too thin to confirm from a screenshot.", "forPlaytesters": "Try cutting a notch. It is one voxel wide at the moment and hard to see from where you cut: tell us whether it should be wider.", "repairRounds": 0, "dispatched": "2026-09-21 20:43", "merged": "2026-09-21 21:09", "workMinutes": 23, "tokens": 14476419, "tokensWritten": 118458,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B3", "title": "Crate towers and templates are live from the start", "round": "Round 1", "column": "done", "kind": "bug", "origin": "Crate towers stood frozen until someone shot them, and slice didn't work on boxes (reported separately as B4; Ben: same issue).", "raisedBy": "playtesters, and Ben", "summary": "Crates and saved templates start simulating the moment they appear, so a tower topples when you bump it. Slicing boxes had already been fixed along with B13.", "status": "Merged with no findings. In the test tower, no crates moved before the fix and 14 did after.", "forPlaytesters": "Spawn a crate tower and knock it over without shooting it first. Slice a box.", "repairRounds": 0, "dispatched": "2026-09-21 21:09", "merged": "2026-09-21 21:28", "workMinutes": 19, "tokens": 13445215, "tokensWritten": 72357,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "Q3", "title": "Q flies up, E flies down", "round": "Round 1", "column": "done", "kind": "qol", "origin": "Players wanted Q and E the other way round.", "raisedBy": "playtesters", "summary": "Q and E are swapped: Q now flies up and E flies down.", "status": "Merged together with Q4, the first job given to a small, fast model. Built and tested by script; not yet played.", "forPlaytesters": "Fly around and check it feels natural.", "repairRounds": 0, "dispatched": "2026-09-21 21:36", "merged": "2026-09-21 21:44", "workMinutes": 4, "tokens": 270481, "tokensWritten": 4395,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "Q4", "title": "Tilting a held object follows the mouse", "round": "Round 1", "column": "done", "kind": "qol", "origin": "Tilting a grabbed object up and down went the opposite way to what players expected. (Looking around already had an invert option.)", "raisedBy": "playtesters", "summary": "Moving the mouse up and down while holding an object now tilts it the way you'd expect. Ben then asked for turning while placing to flip the same way, and Claude did that afterwards.", "status": "Merged with Q3. Built and tested by script; the feel of both, especially place-turning, is not yet played.", "forPlaytesters": "Grab something and tilt it, then turn something while placing it. Does either feel backwards?", "repairRounds": 0, "dispatched": "2026-09-21 21:36", "merged": "2026-09-21 21:44", "workMinutes": 4, "tokens": 270481, "tokensWritten": 4395,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B12", "title": "Carving keeps the object still, and the hole is real", "round": "Round 1", "column": "done", "kind": "bug", "grade": "L", "origin": "You could see through a carved hole but not throw anything through it. The object also jiggled as if poked, so the next scoop landed in the wrong place.", "raisedBy": "Ben", "summary": "Carving no longer nudges the object: it stays put while you carve, and once you finish a stroke its collision is rebuilt to follow the hole, so things really pass through. A hidden bug that could stop joining players seeing the carved shape was fixed on the way.", "status": "Merged after one repair round, plus two fixes by Claude. Checked with scripted demos and screenshots.", "forPlaytesters": "Carve a tunnel through something and roll a ball through it. Known: a ball resting on a freshly carved surface drifts slowly (about 15 cm a second). Tell us whether you notice it.", "repairRounds": 1, "dispatched": "2026-09-21 21:28", "merged": "2026-09-21 23:02", "workMinutes": 65, "tokens": 52056163, "tokensWritten": 391281,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"repaired","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "Q6", "title": "The shelf says who can make your picture", "round": "Round 1", "column": "done", "kind": "qol", "grade": "M", "origin": "The message \"Model files missing\" didn't say whether you had no generator yourself or whether simply nobody was lending theirs.", "raisedBy": "playtesters", "summary": "The shelf panel now tells you plainly whether you can generate yourself, or whether someone in the game is lending a GPU.", "status": "Merged together with Q7. Reviewed by Claude alone (the other reviewers were outside their cheap hours); one duplicated line removed.", "forPlaytesters": "Open the shelf on a machine without a generator and read what it says.", "repairRounds": 0, "dispatched": "2026-09-21 23:39", "merged": "2026-09-22 00:11", "workMinutes": 27, "tokens": 3658878, "tokensWritten": 33684,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3-Flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "Q7", "title": "GPU lending is on by default, and remembered", "round": "Round 1", "column": "done", "kind": "qol", "grade": "M", "origin": "GPU lending started switched off and the host forgot to turn it on, so the generator pool sat idle for an hour.", "raisedBy": "playtesters", "summary": "Lending your GPU to the pool is now on by default, and the game remembers your choice between sessions.", "status": "Merged together with Q6.", "forPlaytesters": "If you have a capable card, check lending is on without you touching it.", "repairRounds": 0, "dispatched": "2026-09-21 23:39", "merged": "2026-09-22 00:11", "workMinutes": 27, "tokens": 3658878, "tokensWritten": 33684,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3-Flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B1", "title": "Objects arrive before you need them", "round": "Round 1", "column": "doing", "kind": "bug", "grade": "R", "origin": "Joining players saw invisible objects that still collided, and empty shelf entries. Place failed for them, a painted couch vanished and came back, collisions juddered and caught up a second or two later, and carving and breaking stalled their game. All of it had one cause: a joining machine only fetched an object's voxels at the moment it needed them.", "raisedBy": "playtesters", "summary": "Researched first, then split into four jobs: placing works on joining machines (done), the shelf downloads in the background, carves are replayed rather than downloaded, and received objects are kept on disk.", "status": "Research done; 3 of 4 parts merged: place works for joining players, the shelf downloads in the background, and received objects are kept on disk. Repeating carves instead of downloading them is still to do. Note: Ben hosted the playtest over WiFi, which makes every lag report harder to read.", "forPlaytesters": "If you can, host one session from a wired connection, so we can tell game lag from WiFi lag.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "B1a", "title": "Place works for joining players", "round": "Round 1", "column": "done", "kind": "bug", "grade": "M", "origin": "Place failed for both players who joined; only Ben, hosting, could place things. Throwing worked. (Reported as B2.)", "raisedBy": "playtesters", "summary": "Joining players can place objects from the shelf. If an object hasn't finished arriving yet, a wireframe box of the right size stands in for it until it does.", "status": "Merged. Reviewed by Claude alone (the other reviewers were outside their cheap hours); no findings. Checked with a two-player script.", "forPlaytesters": "As a joining player, place something straight after it has been generated and watch the box fill in.", "parent": "B1", "repairRounds": 0, "dispatched": "2026-09-22 00:16", "merged": "2026-09-22 00:45", "workMinutes": 29, "tokens": 8836983, "tokensWritten": 74473,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F3", "title": "See-through objects", "round": "Round 1", "column": "doing", "kind": "feature", "origin": "The generator (TRELLIS) works out how see-through each voxel is, but the game throws that away. Ben: \"Trellis should do see-through ok\".", "raisedBy": "Ben", "summary": "Split in two: first measure whether the see-through data is good enough to be worth keeping (F3a), then build the real feature from those numbers (F3b).", "status": "F3a is done: the generator's see-through data does pick out glass. F3b, the part you will see, is designed and waiting its turn.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"}
 ]},

{"id": "F3a", "title": "Measure whether see-through is worth keeping", "round": "Round 1", "column": "done", "kind": "feature", "grade": "M", "origin": "Keeping see-through data touches the file format, what joining players download, the mesh, and the generator add-on, so it's only worth doing if the generator's data really separates glass from solid.", "raisedBy": "Ben", "summary": "Changes nothing you will see. It measured the generator's see-through data on 22 pictures. Most objects come out fully solid, as they should, and on Ben's glass bottle the glass wall reads clearly see-through while the scene inside reads solid. The catch: air sealed inside an object and a few illustrations also read partly see-through, so the real feature needs to be smarter than a single cut-off.", "status": "Done. The answer is yes, it is worth keeping, with care; F3b is designed from these numbers.", "parent": "F3", "repairRounds": 0, "dispatched": "2026-09-22 00:52", "merged": "2026-09-22 05:20", "workMinutes": 114, "tokens": 4354980, "tokensWritten": 67670,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"DeepSeek v4-pro","machine":"ben-3070"}
 ]},

{"id": "F3b", "title": "See-through objects in the game", "round": "Round 1", "column": "todo", "kind": "feature", "origin": "The second half of F3.", "raisedBy": "Ben", "summary": "Glass and other see-through parts of a generated object actually look see-through. Designed from F3a's measurements.", "status": "Designed and split into four parts, and Ben has answered its questions. Glass becomes one see-through sheet with the scene inside visible, and TRELLIS's empty backdrops and smoke are dropped. Queued behind the jobs now running.", "parent": "F3", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F3c", "title": "Air behind glass, not clear filling", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "F3b fills the space behind glass with clear glass, because telling trapped air apart reliably proved fragile. Ben would rather it were air.", "raisedBy": "Ben", "summary": "Work out reliably which voxels behind glass are air, so a bottle is hollow instead of full of clear glass.", "status": "After F3b, and after Ben finds more see-through pictures (glass, water, plastic) to test on.", "parent": "F3", "repairRounds": 0,
 "involved": []},

{"id": "F3b2", "title": "Work out which voxels are see-through", "round": "Round 1", "column": "todo", "kind": "feature", "grade": "L", "origin": "The first half of F3b: something has to turn the generator's see-through numbers into a yes-or-no rule before anything can be drawn with them.", "raisedBy": "Ben", "summary": "A rule that reads an object's see-through values and decides which voxels are glass -- careful about air sealed inside an object, which reads see-through when it is not.", "status": "Approved and ready to start; it shares its measurements with the drawing half beside it.", "parent": "F3b", "blocking": ["F3b4"], "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F3b3", "title": "Draw see-through voxels", "round": "Round 1", "column": "todo", "kind": "feature", "grade": "L", "origin": "The second half of F3b: the rule is no use until the game draws glass as glass.", "raisedBy": "Ben", "summary": "Glass and other see-through parts of a generated object actually look see-through in the game, with what is behind them visible through them.", "status": "Approved and ready to start, beside the rule it draws.", "parent": "F3b", "blocking": ["F3b4"], "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F3b4", "title": "The generator keeps the see-through data", "round": "Round 1", "column": "todo", "kind": "feature", "grade": "M", "origin": "The last part of F3b: the generator add-on currently throws the see-through numbers away, so a generated bottle arrives solid.", "raisedBy": "Ben", "summary": "The generator keeps each voxel's see-through value and the host decides from it, so a glass bottle arrives see-through without the picture being made again.", "status": "Approved, and waiting: its check cannot be run until the rule and the drawing are both in. It also needs a 10 GB card.", "parent": "F3b", "blockedBy": ["F3b2", "F3b3"], "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F2", "title": "Faster generation on 8 GB cards, with a quality toggle", "round": "Round 1", "column": "done", "kind": "feature", "grade": "L", "origin": "Generating an object took nearly ten minutes on an 8 GB card (581 seconds on a 3070). Smaller weights bring that to about 54 seconds. Ben: ship both, with a toggle, so he and his friends can compare quality and speed by playing.", "raisedBy": "Ben", "summary": "Both parts are in. The generator can hold either set of weights, and the game offers a Fast/Best choice that the shared pool respects.", "status": "Done. It came with a hard finding: an 8 GB card cannot make objects while the game is running, so those players get their pictures made by somebody else in the session instead.", "repairRounds": 0, "merged": "2026-09-23 14:36",
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F2a", "title": "The generator knows two sets of weights", "round": "Round 1", "column": "done", "kind": "feature", "grade": "M", "origin": "The first half of F2.", "raisedBy": "Ben", "summary": "The generator can hold both sets of weights and run a job on either: the full ones (Best) or the smaller, faster ones (Fast). It works out which set a folder holds from the files themselves, so a folder fetched under the wrong name still counts, and the fetcher can now get both in one go. Only one set can sit on the card at a time, so a job for the other one waits while they are swapped over.", "status": "Merged for the machinery, on Ben's say-so. It came with a hard finding: on an 8 GB card the game cannot generate at all, on either set. The earlier ten-times-faster measurement was taken with no game running; with the game running the card runs out of memory and the display driver drops out. The machinery was tested end to end with a stand-in generator, and the build and tests pass; it is the real card that failed.", "forPlaytesters": "Nothing to try yet: the toggle that uses this is F2b. If you have an 8 GB card, expect to generate through the pool rather than on your own machine.", "parent": "F2", "repairRounds": 0, "dispatched": "2026-09-22 10:03", "merged": "2026-09-22 18:52", "workMinutes": 86, "tokens": 4709066, "tokensWritten": 44002,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F2b", "title": "A quality toggle in the game", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "M", "origin": "The second half of F2.", "raisedBy": "Ben", "summary": "A Fast or Best choice in the game, and the shared pool respects it. A card with less than 16 GB is offered no local generation at all, with an honest apology: the card is not too weak, it is too busy drawing the game. Those players still get their pictures made by somebody else in the session.", "status": "Merged after one repair round. Built by the cheap fast model, reviewed by another run of it, and Claude fixed what the review found. Checked by script and by looking at pictures of the panel; not yet played.", "forPlaytesters": "Make the same picture on Fast and on Best and tell us whether the difference is worth the wait. If your card has less than 16 GB, read the message and say whether it explains itself.", "parent": "F2", "repairRounds": 0, "dispatched": "2026-09-22 21:42", "merged": "2026-09-23 14:36", "workMinutes": 73, "tokens": 16799276, "tokensWritten": 183598,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "Q1", "title": "Paint colours on the paint tool", "round": "Round 1", "column": "done", "kind": "qol", "grade": "M", "origin": "The paint colour was buried in Options inside the Tab panel and nobody found it, Ben included (\"I forgot the colour picker\").", "raisedBy": "Ben", "summary": "With Paint selected, a strip of colour swatches sits just above the tool bar. Z and X step through them, or click a swatch to pick it.", "status": "Merged. Z and X were tested by script and the strip was checked in a screenshot; clicking a swatch has not been tried by hand yet.", "forPlaytesters": "Pick Paint and try Z, X and clicking a swatch. Is the strip easy to find, and in the way of anything?", "repairRounds": 0, "dispatched": "2026-09-22 04:09", "merged": "2026-09-22 04:45", "workMinutes": 30, "tokens": 10297364, "tokensWritten": 80531,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"GLM-5.3-Flash","machine":"ben-3070"}
 ]},

{"id": "Q2", "title": "Panels stay near the middle on ultrawide screens", "round": "Round 1", "column": "doing", "machine": "ben-3070", "dispatched": "2026-09-24 08:32", "kind": "qol", "grade": "M", "origin": "On a 32:9 monitor the shelf panel and the Options panel sat so far apart that reading one and then the other was a neck-turn.", "raisedBy": "a playtester", "summary": "On screens wider than 16:9, panels line up with a centred 16:9 area instead of the far edges. Nothing moves on ordinary screens.", "status": "Brief ready; queued.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"reviewed","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"repaired","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "Q5", "title": "A controls overlay on H", "round": "Round 1", "column": "done", "kind": "qol", "grade": "M", "origin": "Nothing was discoverable. Ben typed the controls into Discord all night, and players asked for cube brushes and a colour picker that were already in the game.", "raisedBy": "Ben, and playtesters", "summary": "Press H to see the controls, grouped, including those for the tool in your hand. It shows itself once the first time you play.", "status": "Merged. Built in one go by deepseek-flash, the cheap model, and reviewed by another flash run: it had Q and E the wrong way round (Q flies up) and no line on getting the mouse back, both fixed before merging. Checked by Claude at both screen sizes. One thing it uncovered: the game had never actually saved your settings -- fixed the same night as B15, so the controls now greet you only the first time.", "forPlaytesters": "Press H and check every line against what the keys really do -- the list is meant to be complete, so a missing or wrong line is a bug worth a /bug. Switch tools with it open and watch the middle column change.", "repairRounds": 0, "dispatched": "2026-09-22 21:42", "merged": "2026-09-22 22:20", "workMinutes": 27, "tokens": 12136064, "tokensWritten": 121906,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B15", "title": "Your settings are kept between sessions", "round": "Round 1", "column": "done", "kind": "bug", "grade": "M", "origin": "Found by the Q5 worker while checking that the controls only show themselves once: the game has never written its settings file. Paint colour, the options sliders, lending your card and starred objects all reset every time the game starts.", "raisedBy": "deepseek-flash (Q5)", "summary": "Settings you change stay changed after you quit and start again.", "status": "Merged. Your settings now live in a file of the game's own (Saved/Config/VoxSettings.ini), written safely on every change and read at start-up. A damaged or hand-edited file falls back to the defaults instead of crashing or half-loading. Built and reviewed by deepseek-flash; Claude fixed the five review findings, including one where typing a word into a number setting was silently read as zero.", "forPlaytesters": "Change your mouse sensitivity or paint colour, quit, start again: it should still be set. The controls overlay should now greet you only the first time.", "repairRounds": 0, "dispatched": "2026-09-22 22:28", "merged": "2026-09-22 23:32", "workMinutes": 18, "tokens": 7701675, "tokensWritten": 86372,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B9", "title": "Show as joinable on Steam", "round": "Round 1", "column": "doing", "machine": "ben-3070", "dispatched": "2026-09-24 12:22", "kind": "bug", "grade": "M", "origin": "It looked as though Steam showed Ben offline, so friends couldn't join him. Ben later corrected this: his friends were offline, so nothing was broken. Kept as a nice-to-have.", "raisedBy": "Ben", "summary": "Your Steam friends list shows that you're playing VoxBox and can be joined.", "status": "Brief ready; queued.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"reviewed","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "B10", "title": "Other players move smoothly", "round": "Round 1", "column": "done", "machine": "james-3080", "merged": "2026-09-24", "dispatched": "2026-09-24 06:13", "kind": "bug", "grade": "L", "origin": "Other players' markers moved choppily, hopping rather than gliding.", "raisedBy": "Ben", "summary": "Other players glide instead of hopping 15 times a second. The smoothing starts at 120 ms, a first guess for Ben to tune.", "status": "Brief ready; queued.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"}
 ]},

{"id": "B1b", "title": "The shelf downloads in the background", "round": "Round 1", "column": "done", "kind": "bug", "grade": "L", "origin": "Part of B1: objects arrived only when first touched, so every first touch stalled.", "raisedBy": "playtesters", "summary": "When you join, the whole shelf starts downloading in the background, newest objects first, and anything you actually need jumps the queue: an object thrown in front of you appears in under a second even while the rest is still coming. Requests nobody needs any more (an object that was carved again or went away) are cancelled. The background download is capped so it cannot swamp the host's connection.", "status": "Merged. Claude fixed its test in review: it had thrown an object that was already downloading for another reason, which proved nothing. Measured properly on one PC, a thrown object appeared after 0.7 s with 1 of 19 shelf objects downloaded, and the whole 20 MB shelf arrived in about 15 s. Built and tested by script; not yet played over real WiFi.", "forPlaytesters": "Join a game with a big shelf and throw something straight away: it should appear at once, not after a pause. Place's ghost should turn from a box into the real object within a second or two. When you are done, send Ben your log files: they now say how long your shelf took to arrive.", "parent": "B1", "repairRounds": 0, "dispatched": "2026-09-22 10:36", "merged": "2026-09-22 13:31", "workMinutes": 49, "tokens": 16251622, "tokensWritten": 102181,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B1d", "title": "Received objects are kept on disk", "round": "Round 1", "column": "done", "kind": "bug", "grade": "M", "origin": "Part of B1. Ben: \"keep everything, for now\".", "raisedBy": "Ben", "summary": "Objects you have received are kept on your disk, so the next session doesn't download them again. To be replaced by lobby libraries (F13) before any public release.", "status": "Merged. Built by deepseek-flash and blind-reviewed by another flash run; Claude fixed the two things the review caught (a broken object's voxels could queue behind the whole shelf when you joined). Tested with two players on one PC: the second join loaded the whole shelf from disk in half a second, and a deliberately corrupted file was simply fetched again.", "forPlaytesters": "Join the same host twice: the second time the shelf should be ready almost at once. The cache is in Saved/VoxCache and can be deleted any time.", "parent": "B1", "repairRounds": 0, "dispatched": "2026-09-22 22:04", "merged": "2026-09-22 23:12", "workMinutes": 21, "tokens": 9700700, "tokensWritten": 66120,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "B1c", "title": "Carves are replayed, not downloaded", "round": "Round 1", "column": "todo", "kind": "bug", "grade": "L", "origin": "Part of B1: carving stalled joining players' games (reported as B7).", "raisedBy": "playtesters", "summary": "Joining machines repeat each carve themselves, the way they already do for breaks and paint, instead of downloading the object after every scoop.", "status": "Brief ready.", "parent": "B1", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F7", "title": "Glue makes one object", "round": "Round 1", "column": "doing", "kind": "feature", "grade": "R", "origin": "Ben asked for glue to truly merge two objects. It also absorbs two bugs: the glue preview lagged and its outline was too thin to see (B11), and objects with several welds flipped out when grabbed (B14).", "raisedBy": "Ben", "summary": "Glued objects become one solid object, so they stop fighting each other. Unglue goes away (slice separates things instead), and the preview becomes a thick glowing shell showing exactly what will join.", "status": "Five parts merged: the maths of where two objects overlap, the test that several objects can become one body, the glowing glue preview, the join itself, and breaking and editing a joined object part by part. Joining players seeing the same join is built and under review; folding parts together and keeping a build as one object are still to do.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F7a", "title": "The maths of where two objects overlap", "round": "Round 1", "column": "done", "kind": "feature", "grade": "M", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Changes nothing you will see yet. The game can now work out exactly which parts of two objects overlap, and draw the outline of that overlap, identically on every machine. The glue preview and the join are built on it.", "status": "Merged. Claude fixed one thing: it checked three times as many points per cell as the design asked for.", "parent": "F7", "repairRounds": 0, "dispatched": "2026-09-22 10:03", "merged": "2026-09-22 10:23", "workMinutes": 18, "tokens": 2085805, "tokensWritten": 43105,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F7s", "title": "Test: one body made of several objects", "round": "Round 1", "column": "done", "kind": "feature", "grade": "M", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Changes nothing you will see yet. A test showed the game engine can weld several objects into one body and still let each part keep its own weight and bounce: rubber welded to glass bounces like rubber on its rubber side and like glass on its glass side. One welded body of 128 parts is also cheaper to simulate than the same 128 parts loose.", "status": "Merged. Checked by Claude, who re-ran the test and looked at the picture. Two things the next step has to work around: the engine does not reliably say which part was hit, and grip on a slope is averaged over the whole body, so a rubber side may not grip better than a glass one.", "parent": "F7", "repairRounds": 0, "dispatched": "2026-09-22 10:03", "merged": "2026-09-22 13:37", "workMinutes": 131, "tokens": 45272254, "tokensWritten": 178047,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"DeepSeek v4-pro","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F7d", "title": "A glue preview everyone can see", "round": "Round 1", "column": "done", "kind": "feature", "grade": "M", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Hold something with Glue and a thick glowing shell shows exactly the part of it that is buried in whatever you are pushing it into -- which is exactly what letting go would join. It glows through the other object, so you can see it even when it is inside. Hold Ctrl and the shell turns white: the thing you are pushing into wins instead of the thing in your hand.", "status": "Merged. Letting go still welds rather than truly joining -- that is the next job (F7b). Everything was tested by script and both screenshots were checked: the shell reads clearly through the goblin and does not lag behind it.", "forPlaytesters": "Pick Glue, grab something and push it into another object. Is the glowing outline clear about what would join? Try holding Ctrl and watch it turn white. Tell us if it is too busy to read, or if it is hard to tell which side is winning.", "parent": "F7", "repairRounds": 0, "dispatched": "2026-09-22 18:45", "merged": "2026-09-22 20:12", "workMinutes": 32, "tokens": 17502145, "tokensWritten": 98336,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F7b", "title": "Letting go joins the objects", "round": "Round 1", "column": "done", "kind": "feature", "grade": "L", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Letting go now truly joins the glued objects into one body, so they stop fighting each other. The old glue joints and Unglue are gone, and old templates are converted as they load.", "status": "Merged after one repair round. Glued objects become a single body you can carry, throw and push around as one. Built and tested by script and the pictures were looked at; not yet played. Known gap: a joined object could not be broken apart until F7e, which has since merged too.", "forPlaytesters": "Glue two things together, then throw or push the result: it should behave as one object. It could not be broken apart at the time this landed; that came next.", "parent": "F7", "repairRounds": 0, "dispatched": "2026-09-22 23:40", "merged": "2026-09-23 11:10", "workMinutes": 12, "tokens": 10214241, "tokensWritten": 105724,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F7c", "title": "Joining players see the same join", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "M", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Other players rebuild a join themselves instead of downloading the whole object, the same way they already do for breaks, paint and carving.", "status": "Merged. The review found that an object squeezed by two others at once came out slightly wrong on other players' screens, so it was downloaded after all; Claude fixed that before the merge. Checked with a two-player test and its pictures; the two-at-once case has no script test yet. Built and tested by script; not yet played.", "forPlaytesters": "Join a game where somebody glues things together, including one thing pressed into two others at once, and check the joined object looks the same on your screen as on theirs.", "parent": "F7", "repairRounds": 1, "dispatched": "2026-09-23 14:49", "merged": "2026-09-23 16:20", "workMinutes": 71, "tokens": 31482665, "tokensWritten": 323477,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "F7e", "title": "Breaking and editing glued objects", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "L", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "A joined object now breaks, slices, carves and paints part by part: a blow breaks the piece it hits, by that piece's own material, and a cut or a carve works across the join. Each piece keeps its own grip too, so a rubber side grips where a glass side slides.", "status": "Merged after one repair round. Built and tested by script, and the pictures were looked at; a joined build was shot, carved and sliced. Not yet played.", "forPlaytesters": "Glue something rubbery to something glassy, then shoot it: the rubber part should bounce the shot off and the glass part should shatter. Try slicing and carving across the join.", "parent": "F7", "repairRounds": 0, "dispatched": "2026-09-23 08:24", "merged": "2026-09-23 14:14", "workMinutes": 12, "tokens": 11518791, "tokensWritten": 119360,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F7k", "title": "Keep a glued build as a library object", "round": "Round 1", "column": "todo", "kind": "feature", "grade": "L", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Press K on something you glued together to save it to your library as one object.", "status": "After F7c.", "parent": "F7", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F7f", "title": "Glued builds stay light", "round": "Round 1", "column": "doing", "machine": "ben-3070", "dispatched": "2026-09-24 07:53", "kind": "feature", "grade": "M", "origin": "Part of F7.", "raisedBy": "Ben", "summary": "Parts that line up exactly are folded together, so big builds stay cheap to simulate and draw.", "status": "After F7c.", "parent": "F7", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"implemented","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F16", "title": "Bake a glued build into one object", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Glue keeps each part's own grid, material and detail. Ben liked the idea of also offering a deliberate way to fuse a build into a single grid.", "raisedBy": "Ben", "summary": "A Bake action that fuses a glued build into one voxel grid at a resolution you choose, for when you want it to behave as a single lump, for example to carve evenly across the seams.", "status": "Backlog, after F7.", "parent": "F7", "repairRounds": 0,
 "involved": []},

{"id": "F5", "title": "Sound", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Nobody mentioned sound, because there isn't any.", "raisedBy": "the triage", "status": "Roadmap, not this round.", "repairRounds": 0,
 "involved": []},

{"id": "F6", "title": "Save a template from a selection", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Saving the whole table as a template is unusable while others are playing on it.", "raisedBy": "Ben", "summary": "Hold a key and click objects to select them, then save just those as a template.", "status": "Roadmap; small enough to pull forward if there's time (Ben decides).", "repairRounds": 0,
 "involved": []},

{"id": "F8", "title": "Round things bounce like balls", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "A voxel sphere's flat facets knock a rubber ball sideways on its second bounce. Ben asked for a neat solution.", "raisedBy": "Ben", "summary": "The game measures how round each object is when it is made; very round things get a true sphere collider, and nearly round ones bounce more smoothly.", "status": "Roadmap; small enough to pull forward if there's time (Ben decides).", "repairRounds": 0,
 "involved": []},

{"id": "F9", "title": "Primitives: place, then scale; colour before spawning", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Place a primitive and then scale it (growing it with more voxels, not stretching), and choose its colour before spawning.", "raisedBy": "Ben", "status": "Roadmap; Ben has more ideas.", "repairRounds": 0,
 "involved": []},

{"id": "F10", "title": "Add voxels (carving in reverse)", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Build onto objects as well as carving away from them.", "raisedBy": "Ben", "status": "Roadmap, after F7, which builds most of what it needs.", "repairRounds": 0,
 "involved": []},

{"id": "F11", "title": "How good should generation be?", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Are we losing detail by using a coarser voxel grid for too little speed gain? And which weights should ship, once F2's toggle lets everyone compare them by playing?", "raisedBy": "Ben", "status": "Roadmap: a discussion between Ben and Claude.", "repairRounds": 0,
 "involved": []},

{"id": "F12", "title": "A standalone game plus an optional generator add-on", "round": "Round 1", "column": "closed", "kind": "feature", "origin": "The plan is a standalone game on Steam, with the generator as a free optional add-on so players without a capable GPU still get objects through the pool. Today it all ships as one package.", "raisedBy": "Ben", "status": "The design is written with Ben, who has answered its five open questions; the build tasks follow from it.", "repairRounds": 0, "closedAs": "Folded into F22: all generation moves to a free Dedicated app", "parent": "F22",
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"}
 ]},

{"id": "F13", "title": "Lobby libraries, and your own library", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Objects you receive in a lobby go into a temporary lobby library, and you save only the ones you want to your own. Objects you generate are public or private, one by one.", "raisedBy": "Ben", "status": "Roadmap; replaces B1d's keep-everything cache before any public release.", "repairRounds": 0,
 "involved": []},

{"id": "F14", "title": "Keep the generator loaded, or free the card", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Keep the model loaded on the graphics card so generation starts at once, or unload it to get the card's performance back when you won't be generating for a while.", "raisedBy": "Ben", "status": "Roadmap: to discuss alongside F12.", "repairRounds": 0,
 "involved": []},

{"id": "F15", "title": "Cancel a generation job", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "A Best-quality job on an 8 GB card can take ten minutes or more, and there is no way to stop it.", "raisedBy": "Ben", "status": "Roadmap.", "repairRounds": 0,
 "involved": []},

{"id": "B2", "title": "Place fails for joining players", "round": "Round 1", "column": "closed", "closedAs": "Folded into B1; fixed by B1a", "kind": "bug", "origin": "Place failed for both players who joined; it worked for Ben as host. Same cause as B1.", "raisedBy": "playtesters", "parent": "B1", "repairRounds": 0,
 "involved": []},

{"id": "B4", "title": "Slice doesn't work on boxes", "round": "Round 1", "column": "closed", "closedAs": "Merged into B3 (Ben: same issue)", "kind": "bug", "origin": "Slicing a crate did nothing.", "raisedBy": "playtesters", "parent": "B3", "repairRounds": 0,
 "involved": []},

{"id": "B5", "title": "A painted couch vanished and came back", "round": "Round 1", "column": "closed", "closedAs": "Folded into B1", "kind": "bug", "origin": "A painted couch disappeared and reappeared with the paint on: almost certainly a joining machine re-downloading it. Correct, but visible.", "raisedBy": "a playtester", "parent": "B1", "repairRounds": 0,
 "involved": []},

{"id": "B6", "title": "Collisions judder, then catch up", "round": "Round 1", "column": "closed", "closedAs": "Folded into B1", "kind": "bug", "origin": "Collisions juddered and caught up after a second or two.", "raisedBy": "a playtester", "parent": "B1", "repairRounds": 0,
 "involved": []},

{"id": "B7", "title": "Carving and breaking stall joining players", "round": "Round 1", "column": "closed", "closedAs": "Folded into B1; B1c addresses carving", "kind": "bug", "origin": "Carving and breaking made a joining player's game stall.", "raisedBy": "a playtester", "parent": "B1", "repairRounds": 0,
 "involved": []},

{"id": "B11", "title": "Glue preview lags and is hard to see", "round": "Round 1", "column": "closed", "closedAs": "Folded into F7", "kind": "bug", "origin": "The glue preview lagged badly and its outline was too thin to see.", "raisedBy": "a playtester", "parent": "F7", "repairRounds": 0,
 "involved": []},

{"id": "B14", "title": "Objects with several welds flip out when grabbed", "round": "Round 1", "column": "closed", "closedAs": "Folded into F7", "kind": "bug", "origin": "Objects held together by several welds flipped out when someone grabbed them.", "raisedBy": "a playtester", "parent": "F7", "repairRounds": 0,
 "involved": []},

{"id": "F4", "title": "Objectives: repair shop, disposal chute, doughnut golf", "round": "Round 1", "column": "closed", "closedAs": "Pruned", "kind": "feature", "origin": "Ideas for things to do in the sandbox.", "raisedBy": "the triage", "repairRounds": 0,
 "involved": []},

{"id": "F17", "title": "Objects take a fraction of the space", "round": "Round 1", "column": "done", "merged": "2026-09-23 19:31", "kind": "feature", "grade": "R", "origin": "Ben: object files are big, and size matters for disk space, for downloads when someone joins, and for memory.", "raisedBy": "Ben", "summary": "Objects are stored far more compactly with nothing lost: the whole test shelf goes from 37 MB to 1.85 MB. Most of an object's bytes were its hidden inside, which the game can now work out for itself instead of storing.", "status": "Approved by Ben, including a follow-up study that made it smaller again. Three parts built one after another: the groundwork and the file format are merged, and the game using it is being built.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F17a", "title": "Groundwork for compact objects", "round": "Round 1", "column": "done", "kind": "feature", "grade": "M", "origin": "Part of F17.", "raisedBy": "Ben", "summary": "Voxels are kept in one fixed order, gain a see-through value for glass, and the game learns to tell visible voxels from hidden ones. Breaks stay identical on every machine.", "status": "Merged. Changes nothing you will see: objects now keep their voxels in one order and carry a see-through value, and each object is named by its content rather than by the bytes of its file. Both review passes caught an unsafe spot where a malformed object from another player could have crashed the host; fixed before merging. The crates and primitives screenshots were checked and look as before.", "parent": "F17", "repairRounds": 0, "dispatched": "2026-09-22 20:04", "merged": "2026-09-22 21:55", "tokens": 15978319, "tokensWritten": 99799,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F17b", "title": "The compact file format", "round": "Round 1", "column": "done", "kind": "feature", "grade": "L", "origin": "Part of F17.", "raisedBy": "Ben", "summary": "Changes nothing you will see yet. Objects now save in a much smaller file format, able to hold one object or a glued build of several, with a compressor written for this kind of data: the whole test shelf drops from about 37 MB to under 2 MB, with nothing lost. The game itself does not use it until F17c.", "status": "Merged for the format on its own. Reviewed by Claude and by a small, cheap model; between them the file's size limit now counts the whole box rather than the voxels in it, so a malformed file from another player cannot make the host work far too hard. Ben has since asked for that limit to be twice as generous, which F17c will do.", "parent": "F17", "repairRounds": 0, "dispatched": "2026-09-23 00:02", "merged": "2026-09-23 11:04", "workMinutes": 20, "tokens": 6010902, "tokensWritten": 249758,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F17c", "title": "The game uses compact objects everywhere", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "L", "origin": "Part of F17.", "raisedBy": "Ben", "summary": "Saving, loading and sending objects all use the new compact format. Your existing shelf converts itself the first time you start the game, and the old files are kept to one side. Ben's own shelf went from about 36 MB to under 2 MB, and a test game with lots of breaking sent about 2 MB instead of nearly 16 MB.", "status": "Merged. Built and tested by script, and the goblin looked right in a screenshot after the real shelf converted; not yet played.", "parent": "F17", "repairRounds": 1, "dispatched": "2026-09-23 14:49", "merged": "2026-09-23 19:31", "workMinutes": 38, "tokens": 14920599, "tokensWritten": 111030, "forPlaytesters": "Nothing should look different. Joining a game with lots of objects, or breaking things, should be quicker to catch up; tell us if any object looks wrong or goes missing.",
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"GLM-5.3","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Sonnet 4.6 (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Sonnet (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus (orchestrator)","machine":"ben-3070"}
 ]},

{"id": "F18", "title": "Small bits burst into little cubes", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Ben: when a small piece is shot or smashed, it should burst into cube particles rather than spawning ever-smaller objects. Voxels make this easy: the particles are cubes, so they look exactly right.", "raisedBy": "Ben", "summary": "Tiny pieces and the dust from a break burst into a spray of little cubes in the object's real colours, scatter, then fade away after a few seconds. Today that dust simply vanishes.", "status": "On the backlog.", "repairRounds": 0,
 "blocking": ["F24"], "involved": []},

{"id": "F19", "title": "Many copies of an object share one copy in memory", "round": "Round 1", "column": "backlog", "kind": "feature", "grade": "R", "origin": "Ben: a hundred goblins on the table should not each hold their own copy. His idea: one copy in memory that every goblin, and every piece cut from one, draws from.", "raisedBy": "Ben", "summary": "Measure where memory really goes, then let identical objects share one copy of their voxels, shape and collision, and store drawable shapes far more compactly.", "status": "Research starts after the file-format study. Ben's model is adopted only if it measures best.", "repairRounds": 0,
 "involved": []},

{"id": "F20", "title": "Making an object as a thing you do, not a thing you play through", "round": "Round 1", "column": "closed", "kind": "feature", "origin": "A smaller card cannot make an object while the game is running, because the game's own graphics are already using a good chunk of the same memory. But the very same card does it happily in 54 seconds when nothing else is using it. The card is not too weak. It is too busy.", "raisedBy": "Ben", "summary": "Let smaller cards make objects after all, by not asking them to draw the game at the same time: the game stands itself down to little more than a progress bar while your picture is made, then comes back. If that is not enough, a small separate program you run before the game, which fills your library. A bigger card carries on doing both at once.", "status": "On the roadmap. This is what would eventually un-grey the generation controls for anyone under 16 GB, so it matters more than its place in the list suggests.", "repairRounds": 0, "closedAs": "Folded into F22: all generation moves to a free Dedicated app", "parent": "F22",
 "involved": []},

{"id": "F21", "title": "Pay a few pence to have an object made for you", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Ben: not everyone has a card that can make objects, and waiting for somebody else in the session to do it is not always an option.", "raisedBy": "Ben", "summary": "An idea, nothing more yet: rent powerful machines and let anyone have an object made for a few pence -- perhaps a faster tier and a cheaper, slower one. It would mean any computer could use the whole game.", "status": "Far future, and deliberately not designed yet. Almost everything about it is an open question, from what it would really cost to run to whether a three-pound game should have payments in it at all.", "repairRounds": 0,
 "involved": []},

{"id": "D4", "title": "A job can wait for a job, and one job can matter more than another", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "M", "origin": "The backlog is a long chain of jobs now, and machines take work from it by themselves. 'Start only after F7a is merged' was a sentence in a job's notes that nothing read, so a machine could begin a job before the work underneath it existed, and there was no way to say one approved job mattered more than another.", "raisedBy": "Ben", "summary": "A job can now say which jobs it waits for, and which wait for it, and carry a priority (higher is more urgent). The machines never pick up a job whose groundwork is not merged, and take the most urgent first. The board shows both.", "status": "Merged. Reviewed by the cheap fast model; Claude fixed its four small findings.", "parent": "D1", "prio": 3, "repairRounds": 0, "dispatched": "2026-09-23 21:48", "merged": "2026-09-23 22:40",
 "involved": [
   {"role":"implemented","model":"Claude Sonnet 4.6 (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "D1", "title": "More than one machine can work the backlog", "round": "Round 1", "column": "done", "kind": "feature", "origin": "One PC is the whole workforce today, and it cannot test half of what is planned. Ben trusts a few people with the private project, so their machines should take work from the same list.", "raisedBy": "Ben", "summary": "Work can now be shared between several computers safely. Each machine records what it is, how much of its owner's allowance the project may use, whether it may publish a finished job and what it is good for; a job is claimed by one machine before any work starts, so two never pick the same one.", "status": "Done and in use: three machines are set up, two of them started work today. Most of the building was done by one of Claude's own helpers, whose usage this board does not count, so the worker figures below are only for the review.", "repairRounds": 0, "merged": "2026-09-23 11:26", "workMinutes": 6, "tokens": 2601341, "tokensWritten": 71507,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Opus 5.5 (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "D1d", "title": "Which machine takes which job", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "M", "origin": "With more than one computer working the same list, something had to decide which machine takes which job, so that two never start the same one.", "raisedBy": "Ben", "summary": "Each job can now say what a machine must have -- Windows, a big card, Linux, a particular person's machine -- and a machine asking for its next job is given the one that fits it and that fewest others could do.", "status": "Done and in use. Built and reviewed by the cheap fast model, then checked by Claude.", "parent": "D1", "repairRounds": 0, "dispatched": "2026-09-23 15:21", "merged": "2026-09-23 15:43", "workMinutes": 21, "tokens": 13568271, "tokensWritten": 152890,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus","machine":"ben-3070"}
 ]},

{"id": "D2", "title": "The jobs board says which machine did what", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "M", "origin": "There are several machines now, but the board named only the model that researched, built and reviewed a job, so Ben could not see what each machine had been up to.", "raisedBy": "Ben", "summary": "Every piece of a job's story now names the machine as well as the model, and the board gains filters for machine and model, so you can follow one machine's work across the whole board.", "status": "Merged. The page you are reading is the result.", "repairRounds": 0, "dispatched": "2026-09-23 16:06", "merged": "2026-09-23 16:20", "workMinutes": 7, "tokens": 7465863, "tokensWritten": 65560,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "B16", "title": "The two-player test sometimes ends with objects still arriving", "round": "Round 1", "column": "todo", "kind": "bug", "origin": "A run of the scripted two-player test sometimes ends with most of a crate tower still waiting to arrive, and it is not yet known whether the game lost the request or the test simply stopped waiting too early.", "raisedBy": "the team", "summary": "Either the game really does lose a request for an object, or the test is impatient. The next step is to make the test say plainly which of the two it is, and fix whichever it is.", "status": "Open; needs a short brief before anyone builds it. Another run of the same test showed nothing wrong at all, so it may be the test rather than the game.", "repairRounds": 0,
 "involved": []},

{"id": "B17", "title": "On a fast machine the game can start facing the wrong way", "round": "Round 1", "column": "done", "machine": "james-3080", "kind": "bug", "grade": "S", "origin": "On a friend's faster PC, an ordinary run of the game showed only the floor. On a quick machine the shelf can finish loading before the player exists, so the first view may never be set up -- which would affect anyone on a fast PC.", "raisedBy": "a friend's PC", "summary": "The first view is set up whichever happens first, the shelf finishing loading or the player appearing, so nobody starts looking past the goblin.", "status": "Merged on the RTX 3080 machine, the one that showed the bug. Not yet played.", "repairRounds": 0, "dispatched": "2026-09-23 18:25", "merged": "2026-09-23 19:10",
 "involved": [
   {"role":"implemented","model":"Claude Sonnet (subagent)","machine":"james-3080"},
   {"role":"reviewed","model":"Grok (grok-4.7-build)","machine":"james-3080"}
 ]},

{"id": "D3", "title": "A spare machine can run itself", "round": "Round 1", "column": "done", "machine": "ben-3070", "kind": "feature", "grade": "M", "origin": "Ben and a friend wanted a machine left on to pick up waiting jobs by itself, instead of someone starting it by hand.", "raisedBy": "Ben", "summary": "A machine can be set to check for work on a timer, start an organiser when there is some, hand over when it gets tired, and stop when the work or its allowance runs out. Finished work waits for a watched machine to check it before it goes in.", "status": "Merged, but not switched on anywhere yet, and no unattended run has happened for real.", "repairRounds": 0, "dispatched": "2026-09-23 16:34", "merged": "2026-09-23 17:07", "workMinutes": 31, "tokens": 17638365, "tokensWritten": 228796,
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"Claude Opus (orchestrator)","machine":"ben-3070"}
 ]},

{"id": "F22", "title": "VoxBox Dedicated: making objects moves to its own free app", "round": "Round 1", "column": "doing", "kind": "feature", "grade": "L", "origin": "Ben wanted his 3070, which cannot draw the game and make objects at once, to sit in another room making objects for him and his friends, and a way to host lasting worlds later.", "raisedBy": "Ben", "summary": "The game becomes a small download with no generator in it. A free second app, VoxBox Dedicated, makes objects (Model Generation), will host worlds (Dedicated Server), or both. Your card serves you wherever you play, the worlds you list, and everyone in your current world while you tick Lend GPU.", "status": "Designed and approved; the first wave of jobs is starting. A test already showed a card with the game's drawing out of the way makes objects at full speed.", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F22a", "title": "The game on its own, much smaller", "round": "Round 1", "column": "done", "machine": "ben-3070", "merged": "2026-09-24", "kind": "feature", "grade": "M", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "The game ships without the generator or its weights and loses the debugging files and extras it does not need, aiming for under 350 MB.", "forPlaytesters": "The download gets much smaller. For now a playtest zip that can still make objects is built with -Playtest.", "status": "Merged. Shipping package 218 MB (was about 1.1 GB). Built and tested by script; not yet played.", "parent": "F22", "repairRounds": 0,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Sonnet (subagent)","machine":"ben-3070"}
 ]},

{"id": "F22b", "title": "Check every two-player test with a server that has no player", "round": "Round 1", "column": "done", "machine": "ben-3070", "merged": "2026-09-24", "kind": "feature", "grade": "M", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "Every two-player test also runs against a host with no player and no screen, and reports what breaks, so each new feature is written once for both kinds of host.", "forPlaytesters": "Nothing visible: a test that keeps hosting working the same for players and for the Dedicated app.", "status": "Merged. Found three places where the host still assumed it had a player; F22c fixes them.", "parent": "F22", "repairRounds": 0, "prio": 2,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Sonnet (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F22d", "title": "The Dedicated app's modes and settings", "round": "Round 1", "column": "done", "machine": "ben-3070", "merged": "2026-09-24", "kind": "feature", "grade": "M", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "Model Generation, Dedicated Server and Both, each also a startup setting, with the usual server options and a status screen. Server and Both say 'coming later' for now.", "forPlaytesters": "Nothing to play yet: the switches and status screen VoxBox Dedicated will start with.", "status": "Merged. Built and tested by script; the Dedicated app itself arrives with F22s/F22g.", "parent": "F22", "repairRounds": 1,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"Claude Sonnet (subagent)","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"Claude Sonnet (subagent)","machine":"ben-3070"}
 ]},

{"id": "F22e", "title": "The link between the game and the Dedicated app", "round": "Round 1", "column": "done", "machine": "ben-3070", "merged": "2026-09-24", "kind": "feature", "grade": "M", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "A small, tested way for the game and the Dedicated app to talk, on one PC, over a home network or through Steam.", "forPlaytesters": "Nothing visible yet: the language the game and VoxBox Dedicated will speak.", "status": "Merged. Tested by script (unit tests, fuzzed); nothing to see yet -- F22g puts it to work.", "parent": "F22", "repairRounds": 1,
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"reviewed","model":"deepseek-flash","machine":"ben-3070"},
   {"role":"repaired","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F22f", "title": "Try the Steam side on a test app", "round": "Round 1", "column": "doing", "machine": "ben-3070", "dispatched": "2026-09-24 02:34", "kind": "feature", "grade": "R", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "Checks, on Steam's test app, that a Dedicated app can be found and reached by friends without a server of our own.", "status": "Approved; waiting to be picked up.", "parent": "F22", "repairRounds": 0, "blocking": ["F22i"],
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "F22s", "title": "A true server build", "round": "Round 1", "column": "doing", "machine": "ben-3070", "dispatched": "2026-09-23 23:32", "kind": "feature", "grade": "L", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "Builds the engine from source so the Dedicated app is a real server program with no graphics in it, for Windows and Linux.", "status": "Approved; its first step is Ben's (linking his Epic account to GitHub).", "parent": "F22", "repairRounds": 0, "blocking": ["F22o", "F22Ld"],
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"},
   {"role":"implemented","model":"OpenRouter stealth/space-bunny-alpha","machine":"ben-3070"}
 ]},

{"id": "F22La", "title": "Making objects on Linux", "round": "Round 1", "column": "todo", "machine": "sam-linux", "kind": "feature", "grade": "M", "origin": "Part of F22.", "raisedBy": "Ben", "summary": "The generator runs on Linux, the first part of the Dedicated app there.", "status": "Approved, for the Linux machine once it joins.", "parent": "F22", "repairRounds": 0, "blocking": ["F22Ld"],
 "involved": [
   {"role":"researched","model":"Claude Opus (subagent)","machine":"ben-3070"}
 ]},

{"id": "G1", "title": "A machine's Grok can lend a hand", "round": "Round 1", "column": "done", "machine": "james-3080", "merged": "2026-09-24", "kind": "feature", "grade": "M", "origin": "One of the machines has a Grok subscription whose use is already paid for, so work done through it costs nothing extra. It needs a small piece of plumbing to drive it like the other helpers.", "raisedBy": "Ben", "summary": "The RTX 3080 machine can run work through its own Grok subscription, so a job can be built without a per-use bill.", "status": "Merged. Smoke and a real Grok review ran on the RTX 3080 machine.", "repairRounds": 0,
 "involved": [
   {"role":"implemented","model":"Claude Sonnet (subagent)","machine":"james-3080"},
   {"role":"repaired","model":"Claude Sonnet (subagent)","machine":"james-3080"}
 ]},

{"id": "L1", "title": "The build, test and demo scripts on Linux", "round": "Round 1", "column": "todo", "kind": "feature", "grade": "L", "origin": "A friend has offered a Linux machine with a strong card, and every script here is Windows-only, so it cannot take a single job until they run on Linux.", "raisedBy": "Ben", "summary": "The scripts that build, test, run a demo and run the two-player test also work on Linux, so a Linux machine can take work like any other. Making objects and lending a card on Linux wait for a later job.", "status": "Approved; waiting for a Linux machine to take it, and it is that machine's first job.", "repairRounds": 0,
 "involved": []},

{"id": "R3", "title": "Where a compact object's bytes go, and whether a colour list would help", "round": "Round 1", "column": "closed", "kind": "feature", "grade": "M", "origin": "Ben asked whether giving each colour a short number, instead of spelling it out for every voxel, would make object files smaller.", "raisedBy": "Ben", "summary": "A measurement, not a change: it counts where the bytes of a compact object really go, and works out what a colour list would save, object by object.", "status": "Measured and reported; Ben decided the saving was not worth a new mode yet. The work is kept in case that changes.", "repairRounds": 0, "dispatched": "2026-09-23 14:57", "closedAs": "Parked: Ben chose no colour-palette mode for now",
 "involved": [
   {"role":"researched","model":"Claude Opus (orchestrator)","machine":"ben-3070"},
   {"role":"implemented","model":"deepseek-flash","machine":"ben-3070"}
 ]},

{"id": "F22c", "title": "Hosting works the same with no player at the host", "round": "Round 1", "column": "doing", "dispatched": "2026-09-24 15:00", "machine": "james-3080", "kind": "feature", "grade": "L", "origin": "Part of F22: F22b's test found three places where the host assumed it had a player.", "raisedBy": "Ben", "summary": "Breaks and glue are announced by any host, host-run tests need no host player, and the host can lend its own GPU; every two-player test then passes with a host that has no player.", "status": "Approved; for James's Grok worker (james-3080).", "parent": "F22", "repairRounds": 0, "prio": 2, "blocking": ["F22k", "F22Lc"], "involved": [{"role": "researched", "model": "Claude Opus (orchestrator)", "machine": "ben-3070"}]},

{"id": "F23", "title": "A main menu, and a menu on Escape", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Ben, 24 September: stacked buttons like Minecraft's -- Single Player (choose a map, you host from then on), Multiplayer (join friends' lobbies), Options, Exit Game; Escape in game: Options, Exit Lobby, Exit Game.", "raisedBy": "Ben", "summary": "Proposed; needs a design pass and Ben's approval.", "status": "Idea recorded (docs/design/F23-menus.md).", "repairRounds": 0, "blocking": ["F24"], "involved": []},

{"id": "F24", "title": "Voxels raining behind the main menu", "round": "Round 1", "column": "backlog", "kind": "feature", "origin": "Ben, 24 September: random-material voxels rain behind the menu buttons, some bounce off them, the mouse parts them like a hand under a waterfall.", "raisedBy": "Ben", "summary": "Proposed; waits for the menus (F23) and particle effects (F18).", "status": "Idea recorded (docs/design/F24-menu-voxel-rain.md).", "repairRounds": 0, "blockedBy": ["F23", "F18"], "involved": []}
]
};
