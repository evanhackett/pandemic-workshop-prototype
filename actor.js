const constants = require('./constants.js')

const wrapCoord = n => n < 0 ? constants.GRID_RESOLUTION - 1 : n >= constants.GRID_RESOLUTION - 1 ? 0 : n


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
    // Publish location
  }
}

class Medic extends Actor {
  constructor(position) {
    super(position)
    this.color = constants.WHITE()
    this.target = null
  }

  aquireTarget(actors) {

    const distance = (x, y) => {
      const a = Math.abs(this.x - x)
      const b = Math.abs(this.y - y)
      const c = Math.sqrt(a * a + b * b)

      return c
    }

    let closest = { x: Infinity, y: Infinity }
    actors.forEach(actor => {
      if (Infected.isInfected(actor)) {
        if (distance(actor.x, actor.y) < distance(closest.x, closest.y)) {
          closest = actor
        }
      }
    })
    this.target = closest
  }

  cure(actors, other, i, cb) {
    actors[i] = new Actor({ x: other.x, y: other.y })
    this.target = null
    cb('cure')
  }

  moveInTargetDirection() {
    if (!this.target) return

    const directionX = this.x < this.target.x ? 1 : this.x === this.target.x ? 0 : -1
    const directionY = this.y < this.target.y ? 1 : this.y === this.target.y ? 0 : -1

    this.x = wrapCoord(this.x + directionX)
    this.y = wrapCoord(this.y + directionY)

  }

  move(actors, cb) {
    //if (!this.target)
    this.aquireTarget(actors)

    this.moveInTargetDirection()

    actors.forEach((other, i) => {
      if (this !== other && Infected.isInfected(other)) {
        if ((this.x === other.x) && (this.y === other.y)) {
          this.cure(actors, other, i, cb)
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