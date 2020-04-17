const constants = require('./constants')

module.exports = function (canvas, actors) {
  const ctx = canvas.getContext('2d')
  const cellSize = canvas.width / constants.GRID_RESOLUTION

  actors.forEach(actor => {
    ctx.fillStyle = `rgb(${actor.color.r},${actor.color.g},${actor.color.b})`
    ctx.fillRect(actor.x * cellSize, actor.y * cellSize, cellSize, cellSize)
  })

}