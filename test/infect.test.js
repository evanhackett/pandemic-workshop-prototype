const test = require('tape')
const constants = require('../src/constants')
const infect = require('../src/infect')

test('Given an array of actors infect should infect the right actors', t => {
  const actors = [
    { x: 0, y: 0, color: constants.colors.WHITE }, 
    { x: 0, y: 0, color: constants.colors.GREEN }, 
    { x: 0, y: 0, color: constants.colors.RED }
  ]
  
  const infected = infect(actors)
  t.deepEqual(infected, [
    { x: 0, y: 0, color: constants.colors.WHITE }, 
    { x: 0, y: 0, color: constants.colors.RED }, 
    { x: 0, y: 0, color: constants.colors.RED }
  ])
  
  t.end()
})
