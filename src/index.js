const draw = require('./draw')
const constants = require('./constants')
const simulation = require('./simulation')

const canvas = document.getElementById('canvas')


draw(canvas, simulation.actors)
simulation.tick()