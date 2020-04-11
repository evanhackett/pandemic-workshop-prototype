const constants = require('./constants.js')

module.exports = class Actor {
  constructor(position) {
    this.x = position.x
    this.y = position.y
    this.color = constants.GREEN()
  }

  move() {
    const directions = [-1, 0, 1]

    const randomIndexX = Math.round(Math.random() * 2)
    const randomIndexY = Math.round(Math.random() * 2)
    // console.log(randomIndexX, randomIndexY)

    const wrapCoord = n => n < 0 ? constants.GRID_RESOLUTION - 1 : n >= constants.GRID_RESOLUTION - 1 ? 0 : n

    this.x = wrapCoord(this.x + directions[randomIndexX])
    this.y = wrapCoord(this.y + directions[randomIndexY])
  }
}