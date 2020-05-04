const constants = require('./constants')

module.exports = function (deps) {
  return function (x, y) {
    return Object.freeze({
      move: () => {
        const randomDirection = deps.randomDir()
        const randomX = randomDirection.x
        const randomY = randomDirection.y
        x += randomX
        y += randomY
        return { x: x, y: y, color: constants.colors.GREEN }
      }
    })
  }
}
