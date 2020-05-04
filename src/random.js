function randomF ({ GRID_RESOLUTION, randomPos, randomDir }) {
  return {
    position: () => {
      return {
        x: Math.floor(randomPos() * GRID_RESOLUTION),
        y: Math.floor(randomPos() * GRID_RESOLUTION)
      }
    },
    direction: () => {
      const directions = [-1, 0, 1]
      return {
        x: directions[Math.round(randomDir() * 2)],
        y: directions[Math.round(randomDir() * 2)]
      }
    }
  }
}
module.exports = randomF
