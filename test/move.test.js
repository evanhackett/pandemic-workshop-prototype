const test = require('tape')
const constants = require('../src/constants')
const random = require('../src/random')({ GRID_RESOLUTION: constants.GRID_RESOLUTION, randomDir: () => 0.999999 })
const move = require('../src/move')({ moveActor: random.moveActor })

test('should return new array with updated positions', t => {
  let actors = [{ x: 0, y: 0, color: constants.colors.GREEN }, { x: 0, y: 0, color: constants.colors.GREEN }]
  actors = move(actors)
  t.deepEqual(actors, [{ x: 1, y: 1, color: constants.colors.GREEN }, { x: 1, y: 1, color: constants.colors.GREEN }])
  t.end()
})

test('Medics should not move if there are not infect actors present', t => {
  let actors = [{ x: 0, y: 0, color: constants.colors.WHITE }, { x: 0, y: 0, color: constants.colors.WHITE }]
  actors = move(actors)
  t.deepEqual(actors, [{ x: 0, y: 0, color: constants.colors.WHITE }, { x: 0, y: 0, color: constants.colors.WHITE }])
  t.end()
})

test('Medics should move in the direction of the closest infected actor', t => {
  let actors = [{ x: 0, y: 0, color: constants.colors.WHITE }, { x: 5, y: 5, color: constants.colors.RED }]
  actors = move(actors)
  t.deepEqual(actors, [{ x: 1, y: 1, color: constants.colors.WHITE }, { x: 6, y: 6, color: constants.colors.RED }])

  actors = [{ x: 5, y: 5, color: constants.colors.WHITE }, { x: 0, y: 0, color: constants.colors.RED }]
  actors = move(actors)
  t.deepEqual(actors, [{ x: 4, y: 4, color: constants.colors.WHITE }, { x: 1, y: 1, color: constants.colors.RED }])

  actors = [
    { x: 5, y: 5, color: constants.colors.WHITE },
    { x: 0, y: 0, color: constants.colors.RED },
    { x: 20, y: 20, color: constants.colors.RED }
  ]
  actors = move(actors)
  t.deepEqual(actors[0], { x: 4, y: 4, color: constants.colors.WHITE })

  t.end()
})

test('Actors shouldn\'t move past the edge of a wall', t => {
  let actors = [
    { x: 0, y: 0, color: constants.colors.GREEN },
    { x: constants.GRID_RESOLUTION - 1, y: constants.GRID_RESOLUTION - 1, color: constants.colors.GREEN }
  ]
  actors = move(actors)
  t.deepEqual(actors, [
    { x: 1, y: 1, color: constants.colors.GREEN },
    { x: constants.GRID_RESOLUTION - 2, y: constants.GRID_RESOLUTION - 2, color: constants.colors.GREEN }
  ])
  t.end()
})
