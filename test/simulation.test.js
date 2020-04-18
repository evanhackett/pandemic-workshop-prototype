const test = require('tape')
const constants = require('../src/constants')
const Simulation = require('../src/simulation')
const randomF = require('../src/random')

const randomPos0 = randomF({ random: () => 0, GRID_RESOLUTION: 100 })
const randomPos99 = randomF({ random: () => 0.999999999, GRID_RESOLUTION: 100 })

test('simulation should init NUM_ACTORS actors with random starting positions', t => {

  let simulation = new Simulation({ NUM_ACTORS: 1, RED: constants.RED, random: randomPos0 })
  t.equal(Array.isArray(simulation.actors), true)
  t.equal(simulation.actors.length, 1)
  t.deepEqual(simulation.actors[0], { x: 0, y: 0, color: constants.RED() })

  simulation = new Simulation({ NUM_ACTORS: 100, RED: constants.RED, random: randomPos99 })
  t.equal(Array.isArray(simulation.actors), true)
  t.equal(simulation.actors.length, 100)
  t.deepEqual(simulation.actors[0], { x: 99, y: 99, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 99, y: 99, color: constants.RED() })

  t.end()
})

test('simulation.tick() should move them mf actors', t => {
  const simulation = new Simulation({ NUM_ACTORS: 100, RED: constants.RED, random: randomPos0 })
  t.deepEqual(simulation.actors[0], { x: 0, y: 0, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 0, y: 0, color: constants.RED() })

  simulation.tick()
  t.deepEqual(simulation.actors[0], { x: 1, y: 1, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 1, y: 1, color: constants.RED() })
  t.end()
})