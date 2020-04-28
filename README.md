# Guiding Principles!

1. Always start with tests at the highest level (as close to index.js as possible). Then work down to lower levels, eventually hitting unit tests.
1. Write code that makes testing easier.
1. Avoid setters and getters?

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

# Work sesison nine, ?? 4/??
* Write an integration test for actor infection in simulation.js


## Next steps
* In the future constructors returned by factories should be capitalized 
* Makes walls count
* Rethink what the assignment is. What should the student do?
* Special event listening system that is observered by other things. eg graphs or counters 
* Make it so medics do not share the same target, somehow.
* The medics and the OBSERVER PATTERN???
* look into request animiation frame?
* WebGL?

## The future
* Podcast about the observer patern that leads to the workshop
* Probably release this one frees
