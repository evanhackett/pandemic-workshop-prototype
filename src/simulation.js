const cloneDeep = require('lodash').cloneDeep

module.exports = function ({ NUM_ACTORS, colors, random }) {
  function simulation() {
    const actors = []

    for (let i = 0; i < NUM_ACTORS; i++) {
      let { x, y } = random.position()
      actors.push({ x, y, color: colors.GREEN })
    }

    function tick(cb) {
      actors.forEach(actor => {
        let { x, y } = random.direction()
        actor.x += x
        actor.y += y
      })
      cb(Object.freeze(cloneDeep(actors)))
    }

    return { tick }
  }
  return simulation
}



