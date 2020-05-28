'use strict'

const colors = require('./constants').colors

module.exports = ({ randomPos }) => {
  return (NUM_ACTORS, START_INFECTED, START_MEDICS) => {
    const actors = []
    for (let i = 0; i < NUM_ACTORS - START_INFECTED - START_MEDICS; i++) {
      const { x, y } = randomPos()
      actors.push({ x, y, color: colors.GREEN })
    }
    for (let i = 0; i < START_INFECTED; i++) {
      const { x, y } = randomPos()
      actors.push({ x, y, color: colors.RED })
    }
    for (let i = 0; i < START_MEDICS; i++) {
      const { x, y } = randomPos()
      actors.push({ x, y, color: colors.WHITE })
    }
    return actors
  }
}
