const constants = require('./constants')
const draw = require('./draw')
const random = require('./random')({ randomDir: Math.random, randomPos: Math.random, GRID_RESOLUTION: constants.GRID_RESOLUTION })
const simulation = require('./simulation')({ NUM_ACTORS: constants.NUM_ACTORS, random })()

const canvas = document.getElementById('canvas')

const interval = setInterval(function () {
  simulation.tick(actors => {
    draw(canvas, actors)
  })
}, constants.INTERVAL)
