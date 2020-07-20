const colors = require('./constants').colors

module.exports = ({ randomPos }) => {
  return (START_HEALTHY, START_INFECTED, START_MEDICS) => {
    const actors = []
    for (let i = 0; i < START_HEALTHY; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.GREEN }))
    }
    for (let i = 0; i < START_INFECTED; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.RED }))
    }
    for (let i = 0; i < START_MEDICS; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.WHITE }))
    }
    return Object.freeze(actors)
  }
}
