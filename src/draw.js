const constants = require('./constants')

module.exports = function (canvas, actors) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = `rgb(0,0,0)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const cellSize = canvas.width / constants.GRID_RESOLUTION
  actors.forEach(actor => {
    ctx.fillStyle = `rgb(${actor.color.r},${actor.color.g},${actor.color.b})`
    ctx.fillRect(actor.x * cellSize, actor.y * cellSize, cellSize, cellSize)
  })
}
