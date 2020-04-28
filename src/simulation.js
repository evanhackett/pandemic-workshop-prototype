const actorF = require('./actor')

module.exports = function ({ NUM_ACTORS, random }) {

  const actor = actorF({ randomDir: random.direction })

  function simulation() {
    const actors = []

    for (let i = 0; i < NUM_ACTORS; i++) {
      let { x, y } = random.position()
      actors.push(actor(x, y))
    }

    function tick(cb) {
      const newPositions = actors.map(actor => actor.move())

      // How do we infect???
      // const newerPositions = actors.map(actor => actor.infect(newPostitions) or something? )

      cb(Object.freeze(newPositions))
    }

    return { tick }
  }
  return simulation
}



