'use strict'

const constants = require('./constants')
const draw = require('./draw')
const random = require('./random')({ randomDir: Math.random, randomPos: Math.random, GRID_RESOLUTION: constants.GRID_RESOLUTION })
const move = require('./move')({ moveActor: random.moveActor })
const init = require('./init')({ randomPos: random.position })
const infect = require('./infect')
const heal = require('./heal')
const canvas = document.getElementById('canvas')

let actors = init(constants.NUM_ACTORS, constants.START_INFECTED, constants.START_MEDICS)

setInterval(function () {
  draw(canvas, actors)
  actors = heal(infect(move(actors)))
}, constants.INTERVAL)
