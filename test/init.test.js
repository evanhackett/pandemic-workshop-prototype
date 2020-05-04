const test = require('tape')
const constants = require('../src/constants')
const random = require('../src/random')({ GRID_RESOLUTION: constants.GRID_RESOLUTION, randomPos: () => 0 })
const init = require('../src/init')({ randomPos: random.position, colors: constants.colors })

test('Init should return an array of "actor" objects with positions and colors', t => {
  const actors = init(2)
  t.deepEqual(actors, [{ x: 0, y: 0, color: constants.colors.GREEN }, { x: 0, y: 0, color: constants.colors.GREEN }])
  t.end()
})
