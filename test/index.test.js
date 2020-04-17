const app = require('../src/app')
const test = require('tape')
const constants = require('../src/constants')

test('actor should be drawn to canvas in the right place', function (t) {
  const actors = [{ x: 1, y: 1 }]
  const canvas = {
    getContext: () => {
      return {
        fillRect: (x, y, width, height) => {
          const cellSize = canvas.width / constants.GRID_RESOLUTION
          t.equal(x, actors[0].x * cellSize)
          t.equal(y, actors[0].y * cellSize)
          t.equal(width, cellSize)
          t.equal(height, cellSize)
        },
        fillStyle: () => { },
      }
    },
    width: 100
  }
  app(canvas, actors)
  t.end()
})