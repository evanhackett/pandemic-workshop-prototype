const test = require('tape')
const constants = require('../src/constants')
const simulationF = require('../src/simulation')
const randomF = require('../src/random')

const randomPos0Dir1 = randomF({ randomPos: () => 0, randomDir: () => 0.999999, GRID_RESOLUTION: 100 })

test('simulation.tick() should move them mf actors and invoke supplied callback passing in a frozen copy of the actors array', t => {
  t.plan(4)

  const simulation = simulationF({ NUM_ACTORS: 100, random: randomPos0Dir1 })()

  // By checking their position twice we know that they inited to x: 0, y: 0
  simulation.tick((actors) => {
    t.deepEqual(actors[0], { x: 1, y: 1, color: constants.colors.GREEN })
    t.deepEqual(actors[99], { x: 1, y: 1, color: constants.colors.GREEN })
  })

  simulation.tick((actors) => {
    t.deepEqual(actors[0], { x: 2, y: 2, color: constants.colors.GREEN })
    t.deepEqual(actors[99], { x: 2, y: 2, color: constants.colors.GREEN })
  })

  t.end()
})

// We need to write an integration test for infecting actors here, first
