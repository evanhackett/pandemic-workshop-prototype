const test = require('tape')
const constants = require('../src/constants')
const random = require('../src/random')({ GRID_RESOLUTION: constants.GRID_RESOLUTION, randomDir: () => 0.999999 })
const move = require('../src/move')({ randomDir: random.direction })

test('should return new array with updated positions', t => {
  let actors = [{ x: 0, y: 0, color: constants.colors.GREEN }, { x: 0, y: 0, color: constants.colors.GREEN }]
  actors = move(actors)
  t.deepEqual(actors, [{ x: 1, y: 1, color: constants.colors.GREEN }, { x: 1, y: 1, color: constants.colors.GREEN }])
  t.end()
})
