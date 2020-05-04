const test = require('tape')
const actorF = require('../src/actor')
const constants = require('../src/constants')
const randomF = require('../src/random')

test('actor constructor should return an object with "move" property', t => {
  const actor = actorF()
  const a = actor(1, 1)
  t.equal(typeof a.move === 'function', true)

  t.end()
})

const random = randomF({ randomDir: () => 0.999999 })

test('actor.move should move the actor based on the supplied random function and return the position and color of the moved actor ', t => {
  const actor = actorF({ randomDir: random.direction })
  const a = actor(1, 1)

  t.deepEqual(a.move(), { x: 2, y: 2, color: constants.colors.GREEN })

  t.end()
})
