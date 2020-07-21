# Guiding Principles!

1. Ship It 🚀
1. Do the simple thing first
1. Always start with tests at the highest level (as close to index.js as possible). Then work down to lower levels, eventually hitting unit tests.
1. Write code that makes testing easier.

## How did we get here?
* Seat time counts, Sometimes it's impossible to not learn things the hard way

# Lessons Learned
* Prototype first, but at some point spend time upfront on architecture design
* It's not a great idea to just jump into writing code again after the first prototype
* Testing too much holds you back more than it helps
* Strive for loose coupling to avoid propagating changes

# Takeaways
* When prototyping don't worry about having tests.
* After the prototype Achitecture matters. 
* We have a lot to learn about practical Achitecture.

# Work session one!
## What are we trying to do?

1. Grid ✅
1. Canvas ✅
1. Bumper Dots - Decided not needed yet

# Work session two, 4/6/2020
## Next steps 

* function for populating actors array with actors at random locations ✅
* * This nested loops is not that slow
* init all actors to red except 1 infected actor ✅
* write logic for spreading the infection (change color of actors that come into contact with infected actor) ✅
* bonus points for within 6 cells corona style!

# Work session three, Saturday 4/11 or Sunday 4/12

* Refactor actor to class ✅
* Moved constants to their own file ✅

# Work session four, Tuesday 4/14

* Refactor Infected to class ✅
* Added Medic Class without Observer ✅
* Medics go to closest Infected ✅

# Work session five, Thursday 4/16
* Start Refactor with TDD & tests in general ✅

# Work session six, Saturday 4/18
* Added simulation class ✅
* Added random module ✅
* dependency injection on a module level ✅

# Work session six, Tuesday 4/21
* Clear the canvas on redraw ✅
* Refactored the colors constant to be it's own object with frozen color sub objects ✅
* Refactor simulaton to ES5 ✅

# Work session seven, Thursday 4/23
* Deep dive on destructuring, scope, closures and mutablilty ✅👍
* Made actor module ✅

# Work sesison eight, Tuesday 4/28
* Add an infected actor to infect the other actors ❌ 
* We started trying to test the infect logic at the unit level instead of the simulation level which lead us to chasing our tails a bit. 
* Invented a new guiding principal from this. ✅

# Work sesison nine, Monday 5/04
* Refactor to almost pure fp ✅
* Add infect function ✅

# Work sesison ten, Sunday 5/10
* Add utils funcitons ✅
* Require constants instead of injecting them ✅
* Add Medic ✅
* Add Heal function ✅
* Removed draw tests because they were excessive ✅

# Work sesison eleven, Sunday 5/16
* Makes walls count ✅
* Refactored random.direction to random.moveActor ✅

# Work sesison twelve, Sunday 5/20
* Fix the medic stacking
### Ideas:
* Max One per square -> Most behavior change
* - `actors[1][0] === {color: 'green'}`
* Max Stack of two per square 
* Only medics can't stack
* Fancy target information sharing data structure
* Use tables if NEEDED

# Work session thriteen, 5/xx
* Finish the prototype
* Don't worry about making it clean
* After we FINISH the protype think about the interface and architecture 

## Next steps
* Medics become a roving healing squad of doom, that isn't super effective, is this is another bottom up refactor?
* Try out [RITEway](https://github.com/ericelliott/riteway)
* Refactor to `import ... from ...`
* In the future constructors returned by factories should be capitalized 
* Special event listening system that is observered by other things. eg graphs or counters 
* Make it so medics do not share the same target, somehow.
* The medics and the OBSERVER PATTERN???
* look into request animiation frame?
* WebGL?

## The future
* Podcast about the observer patern that leads to the workshop
* Probably release this one frees

# What is the assignment? Here are some ideas:
* students refactor OOP solution into FP solution
* The video of us going through the refactor again
* We give them the starting and ending postition so they can follow along