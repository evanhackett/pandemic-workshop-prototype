function randomF({ GRID_RESOLUTION, random }) {
  return {
    position: () => {
      return {
        x: Math.floor(random() * GRID_RESOLUTION),
        y: Math.floor(random() * GRID_RESOLUTION),
      }
    }
  }
}
module.exports = randomF