class Simulation {
  constructor({ NUM_ACTORS, RED }) {
    this.actors = []
    for (let i = 0; i < NUM_ACTORS; i++)
      this.actors.push({ x: 1, y: 1, color: RED() })
  }
}


module.exports = Simulation
