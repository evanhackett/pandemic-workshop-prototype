'use strict'
function randomF ({ GRID_RESOLUTION, randomPos, randomDir }) {
  return {
    position: () => {
      return {
        x: Math.floor(randomPos() * GRID_RESOLUTION),
        y: Math.floor(randomPos() * GRID_RESOLUTION)
      }
    },
    moveActor: (actor, actors) => {
      // construct validMoves
      // X:10, Y:10
      const increments = [
        { x: -1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 },
        { x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 },
        { x: -1, y: -1 }, { x: 0, y: -1 }, { x: 1, y: -1 }
      ]
      const possibleMoves = increments.map(postition => ({ x: actor.x + postition.x, y: actor.y + postition.y }))

      // loop over possibleMoves and check which ones are in bound
      const possibleMovesInBound = possibleMoves.filter(pos => pos.x < GRID_RESOLUTION && pos.x >= 0 && pos.y < GRID_RESOLUTION && pos.y >= 0)

      // check spaces for walls or other actors
      const invalidMoves = []
      actors.forEach(actor2 => {
        if (actor === actor2) return
        const invalidMove = possibleMovesInBound.find(position => position.x === actor2.x && position.y === actor2.y)
        if (invalidMove) {
          invalidMoves.push(invalidMove)
        }
      })

      const validMoves = []
      possibleMovesInBound.forEach(pos => {
        if (!invalidMoves.find(pos2 => pos.x === pos2.x && pos.y === pos2.y)) {
          validMoves.push(pos)
        }
      })

      // select a random valid move
      const newPosition = validMoves[Math.round(randomDir() * (validMoves.length - 1))]

      return { ...actor, x: newPosition.x, y: newPosition.y }
    }
  }
}
module.exports = randomF
