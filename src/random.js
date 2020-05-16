function randomF ({ GRID_RESOLUTION, randomPos, randomDir }) {
  return {
    position: () => {
      return {
        x: Math.floor(randomPos() * GRID_RESOLUTION),
        y: Math.floor(randomPos() * GRID_RESOLUTION)
      }
    },
    moveActor: actor => {
      const directions = [-1, 0, 1]
      const directionX = directions[Math.round(randomDir() * 2)]
      const directionY = directions[Math.round(randomDir() * 2)]

      const x = actor.x + directionX >= GRID_RESOLUTION || actor.x + directionX < 0 ? actor.x - directionX : actor.x + directionX
      const y = actor.y + directionY >= GRID_RESOLUTION || actor.y + directionY < 0 ? actor.y - directionY : actor.y + directionY

      return { ...actor, x, y }
    }
  }
}
module.exports = randomF
