const constants = require('./constants')

module.exports = function (canvas, actors) {
  const ctx = canvas.getContext()
  const cellSize = canvas.width / constants.GRID_RESOLUTION

  ctx.fillRect(actors[0].x * cellSize, actors[0].y * cellSize, cellSize, cellSize)
}