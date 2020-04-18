const test = require('tape')
const constants = require('../src/constants')
const simulationF = require('../src/simulation')
const randomF = require('../src/random')

const randomPos0 = randomF({ randomPos: () => 0, GRID_RESOLUTION: 100 })
const randomPos99 = randomF({ randomPos: () => 0.999999999, GRID_RESOLUTION: 100 })

test('simulation should init NUM_ACTORS actors with random starting positions', t => {
  let Simulation = simulationF({ NUM_ACTORS: 1, RED: constants.RED, random: randomPos0 })
  let simulation = new Simulation()

  t.equal(Array.isArray(simulation.actors), true)
  t.equal(simulation.actors.length, 1)
  t.deepEqual(simulation.actors[0], { x: 0, y: 0, color: constants.RED() })

  Simulation = simulationF({ NUM_ACTORS: 100, RED: constants.RED, random: randomPos99 })
  simulation = new Simulation()

  t.equal(Array.isArray(simulation.actors), true)
  t.equal(simulation.actors.length, 100)
  t.deepEqual(simulation.actors[0], { x: 99, y: 99, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 99, y: 99, color: constants.RED() })

  t.end()
})

const randomPos0Dir1 = randomF({ randomPos: () => 0, randomDir: () => 0.999999, GRID_RESOLUTION: 100 })

test('simulation.tick() should move them mf actors', t => {
  const Simulation = simulationF({ NUM_ACTORS: 100, RED: constants.RED, random: randomPos0Dir1 })
  const simulation = new Simulation()


  t.deepEqual(simulation.actors[0], { x: 0, y: 0, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 0, y: 0, color: constants.RED() })

  simulation.tick()
  t.deepEqual(simulation.actors[0], { x: 1, y: 1, color: constants.RED() })
  t.deepEqual(simulation.actors[99], { x: 1, y: 1, color: constants.RED() })
  t.end()
})