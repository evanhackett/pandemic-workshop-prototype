function randomF({ GRID_RESOLUTION, random }) {
  return {
    position: () => {
      return {
        x: Math.floor(random() * GRID_RESOLUTION),
        y: Math.floor(random() * GRID_RESOLUTION),
      }
    },
    direction: () => {
      const directions = [-1, 0, 1]
      return {
        x: directions[Math.round(random() * 2)],
        y: directions[Math.round(random() * 2)],
      }
    }
  }
}
module.exports = randomF