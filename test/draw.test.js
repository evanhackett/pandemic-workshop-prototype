const draw = require('../src/draw')
const test = require('tape')
const constants = require('../src/constants')

test('actor should be drawn to canvas in the right place with the right argument', function (t) {
  const actors = [{ x: 1, y: 1, color: constants.colors.GREEN }]
  const canvas = {
    getContext: (arg) => {
      t.equal(arg, '2d')
      return {
        fillRect: (x, y, width, height) => {
          const cellSize = canvas.width / constants.GRID_RESOLUTION
          t.equal(x, actors[0].x * cellSize)
          t.equal(y, actors[0].y * cellSize)
          t.equal(width, cellSize)
          t.equal(height, cellSize)
        },
        fillStyle: () => { },
        clearRect: () => { },
      }
    },
    width: 100,
    height: 100,
  }
  draw(canvas, actors)
  t.end()
})

function colorToRGBString(color) {
  return `rgb(${color.r},${color.g},${color.b})`
}

test('All actors in the actor list should be drawn to canvas with the right color', function (t) {
  const actors = [
    { x: 1, y: 1, color: constants.colors.GREEN },
    { x: 2, y: 2, color: constants.colors.BLUE },
    { x: 3, y: 0, color: constants.colors.RED }
  ]
  const testState = []
  const canvas = {
    getContext: () => {
      const ctx = {
        fillRect: (x, y, width, height) => {
          testState.push({ x: x, y: y, color: ctx.fillStyle })
        },
        fillStyle: null,
        clearRect: () => { },
      }

      return ctx
    },
    width: 100,
    height: 100,
  }

  draw(canvas, actors)

  t.deepEqual(testState, actors.map(actor => ({ x: actor.x, y: actor.y, color: colorToRGBString(actor.color) })))
  t.end()
})

test('Draw should clear the canvas when invoked', t => {
  t.plan(4)

  const canvas = {
    getContext: () => {
      const ctx = {
        fillRect: () => { },
        fillStyle: null,
        clearRect: (x, y, width, height) => {
          t.equal(x, 0)
          t.equal(y, 0)
          t.equal(width, canvas.width)
          t.equal(height, canvas.width)
        }
      }
      return ctx
    },
    width: 100,
    height: 100
  }
  draw(canvas, [])
  t.end()
})
