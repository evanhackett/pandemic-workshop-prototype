const test = require('tape')
const randomF = require('../src/random')

test('random module return an object with "position" method', t => {
  const random = randomF({ GRID_RESOLUTION: 100 })
  t.equal(typeof random.position === 'function', true)
  t.end()
})

test('random.position returns a position between 0 and GRID_RESOLUTION', t => {
  let random = randomF({ random: () => 0, GRID_RESOLUTION: 100 })
  t.deepEqual(random.position(), { x: 0, y: 0 })
  t.deepEqual(random.position(), { x: 0, y: 0 })

  random = randomF({ random: () => 0.99999, GRID_RESOLUTION: 100 })
  t.deepEqual(random.position(), { x: 99, y: 99 })
  t.deepEqual(random.position(), { x: 99, y: 99 })
  t.end()
})