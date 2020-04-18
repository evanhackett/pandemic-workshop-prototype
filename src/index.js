const constants = require('./constants')
const draw = require('./draw')
const random = require('./random')({ randomDir: Math.random, randomPos: Math.random, GRID_RESOLUTION: constants.GRID_RESOLUTION })
const Simulation = require('./simulation')({ NUM_ACTORS: constants.NUM_ACTORS, RED: constants.RED, random })

const simulation = new Simulation()

const canvas = document.getElementById('canvas')

const interval = setInterval(function () {
  draw(canvas, simulation.actors)
  simulation.tick()

}, constants.INTERVAL)
