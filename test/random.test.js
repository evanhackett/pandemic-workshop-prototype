const test = require('tape')
const randomF = require('../src/random')

test('random module return an object with "position" method', t => {
  const random = randomF({ GRID_RESOLUTION: 100 })
  t.equal(typeof random.position === 'function', true)
  t.end()
})

test('random.position returns a position between 0 and GRID_RESOLUTION', t => {
  let random = randomF({ randomPos: () => 0, GRID_RESOLUTION: 100 })
  t.deepEqual(random.position(), { x: 0, y: 0 })
  t.deepEqual(random.position(), { x: 0, y: 0 })

  random = randomF({ randomPos: () => 0.99999, GRID_RESOLUTION: 100 })
  t.deepEqual(random.position(), { x: 99, y: 99 })
  t.deepEqual(random.position(), { x: 99, y: 99 })
  t.end()
})

// function randomSequence (sequence) {
//   let index = -1
//   return () => {
//     index = (index + 1) % 3
//     return sequence[index]
//   }
// }

test('moveActor should move the actor in a random direction, without going past the walls OR stacking them on the same spot', t => {
  const random = randomF({ GRID_RESOLUTION: 10, randomDir: () => 0.3333 })
  const actor = { x: 0, y: 0 }
  const actors = [actor, { x: 1, y: 1 }]
  t.deepEqual(random.moveActor(actor, actors), { x: 0, y: 0 })
  t.end()
})

// test('moveActor should move the actor in a random direction, without going past the walls', t => {
//   let random = randomF({ GRID_RESOLUTION: 10, randomDir: () => 0 })
//   t.deepEqual(random.moveActor({ x: 0, y: 0 }), { x: 1, y: 1 })

//   random = randomF({ GRID_RESOLUTION: 10, randomDir: () => 0.5 })
//   t.deepEqual(random.moveActor({ x: 0, y: 0 }), { x: 0, y: 0 })

//   random = randomF({ GRID_RESOLUTION: 10, randomDir: () => 0.99999 })
//   t.deepEqual(random.moveActor({ x: 4, y: 4 }), { x: 5, y: 5 })

//   random = randomF({ GRID_RESOLUTION: 10, randomDir: () => 0.99999 })
//   t.deepEqual(random.moveActor({ x: 9, y: 9 }), { x: 8, y: 8 })

//   t.end()
// })
