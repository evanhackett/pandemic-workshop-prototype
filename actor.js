const constants = require('./constants.js')

class Actor {
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

class Infected extends Actor {
  constructor(position) {
    super(position)
    this.color = constants.RED()
  }

  static isInfected(actor) {
    return actor.constructor.name === 'Infected'
  }

  static infect(actors, other, i, cb) {
    actors[i] = new Infected({ x: other.x, y: other.y })
    cb('infect')
  }

  move(actors, cb) {
    super.move()

    actors.forEach((other, i) => {
      if (this !== other && !Infected.isInfected(other) && other.constructor.name !== 'Medic') {
        if ((this.x === other.x) && (this.y === other.y)) {
          Infected.infect(actors, other, i, cb)
        }
      }
    })
  }
}

class Medic extends Actor {
  constructor(position) {
    super(position)
    this.color = constants.WHITE()
  }

  static cure(actors, other, i, cb) {
    actors[i] = new Actor({ x: other.x, y: other.y })
    cb('cure')
  }

  move(actors, cb) {
    super.move()

    actors.forEach((other, i) => {
      if (this !== other && Infected.isInfected(other)) {
        if ((this.x === other.x) && (this.y === other.y)) {
          Medic.cure(actors, other, i, cb)
        }
      }
    })
  }
}

module.exports = {
  Actor,
  Infected,
  Medic
}