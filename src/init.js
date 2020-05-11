const colors = require('./constants').colors

module.exports = ({ randomPos }) => {
  return (NUM_ACTORS, START_INFECTED) => {
    const actors = []
    for (let i = 0; i < NUM_ACTORS - START_INFECTED; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.GREEN }))
    }
    for (let i = 0; i < START_INFECTED; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.RED }))
    }
    return Object.freeze(actors)
  }
}
