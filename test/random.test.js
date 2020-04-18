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

test('random module should return an object with "direction" method', t => {
  const random = randomF({ GRID_RESOLUTION: 100 })
  t.equal(typeof random.direction === 'function', true)
  t.end()
})

test('random.direction should return either -1, 0 or 1', t => {
  let random = randomF({ random: () => 0 })
  t.deepEqual(random.direction(), { x: -1, y: -1 })
  t.deepEqual(random.direction(), { x: -1, y: -1 })

  random = randomF({ random: () => 0.5 })
  t.deepEqual(random.direction(), { x: 0, y: 0 })
  t.deepEqual(random.direction(), { x: 0, y: 0 })

  random = randomF({ random: () => 0.999999 })
  t.deepEqual(random.direction(), { x: 1, y: 1 })
  t.deepEqual(random.direction(), { x: 1, y: 1 })
  t.end()
})
