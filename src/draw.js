const constants = require('./constants')

module.exports = function (canvas, actors) {
  const ctx = canvas.getContext()
  const cellSize = canvas.width / constants.GRID_RESOLUTION

  actors.forEach(actor => {
    ctx.fillStyle = actor.color
    ctx.fillRect(actor.x * cellSize, actor.y * cellSize, cellSize, cellSize)
  })

}