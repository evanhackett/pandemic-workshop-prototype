const test = require('tape')
const constants = require('../src/constants')
const heal = require('../src/heal')

test('Given an array of actors heal should heal the right actors', t => {
  const actors = [
    { x: 0, y: 0, color: constants.colors.WHITE },
    { x: 0, y: 0, color: constants.colors.RED },
    { x: 1, y: 1, color: constants.colors.RED } 
  ]
  
  const healed = heal(actors)
  
  t.deepEqual(healed, [
    { x: 0, y: 0, color: constants.colors.WHITE }, 
    { x: 0, y: 0, color: constants.colors.GREEN },
    { x: 1, y: 1, color: constants.colors.RED }, 
  ])
  t.end()
})
