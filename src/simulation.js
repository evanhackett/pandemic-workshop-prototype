
module.exports = function ({ NUM_ACTORS, colors, random }) {
  class Simulation {
    constructor() {
      this.actors = []
      for (let i = 0; i < NUM_ACTORS; i++) {
        let { x, y } = random.position()
        this.actors.push({ x, y, color: colors.GREEN })
      }
    }

    tick() {
      this.actors.forEach(actor => {
        let { x, y } = random.direction()
        actor.x += x
        actor.y += y
      })
    }
  }

  return Simulation
}
