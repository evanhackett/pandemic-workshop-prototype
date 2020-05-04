const constants = require('./constants')
const draw = require('./draw')
const random = require('./random')({ randomDir: Math.random, randomPos: Math.random, GRID_RESOLUTION: constants.GRID_RESOLUTION })
const move = require('./move')({ randomDir: random.direction })
const init = require('./init')({ randomPos: random.position, colors: constants.colors })
const infect = require('./infect')({ colors: constants.colors })
const canvas = document.getElementById('canvas')

let actors = init(constants.NUM_ACTORS, constants.START_INFECTED)

setInterval(function () {
  actors = infect(move(actors))
  draw(canvas, actors)
}, constants.INTERVAL)
