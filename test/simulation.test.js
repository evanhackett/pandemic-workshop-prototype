const test = require('tape')
const constants = require('../src/constants')
const Simulation = require('../src/simulation')

test('simulation should init NUM_ACTORS actors', t => {
  let simulation = new Simulation({ NUM_ACTORS: 1, RED: constants.RED })
  t.equal(Array.isArray(simulation.actors), true)
  t.equal(simulation.actors.length, 1)
  t.deepEqual(simulation.actors[0], { x: 1, y: 1, color: constants.RED() })

  simulation = new Simulation({ NUM_ACTORS: 100, RED: constants.RED })
  t.equal(Array.isArray(simulation.actors), true)
  t.equal(simulation.actors.length, 100)
  t.deepEqual(simulation.actors[0], { x: 1, y: 1, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 1, y: 1, color: constants.RED() })


  t.end()
})

// test('simulation.tick() should move them mf actors', t => {
//   const actors = [{ x: 1, y: 1, color: constants.RED() }]
//   simulation.tick()
// t.end()
// })