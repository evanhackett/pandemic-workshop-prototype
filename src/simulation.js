class Simulation {
  constructor({ NUM_ACTORS, RED, random }) {
    this.actors = []
    for (let i = 0; i < NUM_ACTORS; i++) {
      let { x, y } = random.position()
      this.actors.push({ x, y, color: RED() })
    }
  }
}


module.exports = Simulation
