const draw = require('./draw')
const constants = require('./constants')

const canvas = document.getElementById('canvas')
const actors = [
  { x: 1, y: 1, color: constants.RED() },
  { x: 2, y: 2, color: constants.BLUE() },
  { x: 3, y: 0, color: constants.GREEN() }
]

draw(canvas, actors)
