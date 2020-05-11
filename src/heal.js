const { isInfected, isMedic } = require('./utils')
const colors = require('./constants').colors
 
module.exports = actors => {
  return actors.map((actor, i, actors) => {
    if (isInfected(actor)) {
      for (let i = 0; i < actors.length; i++) {
        const otherActor = actors[i]
        if (isMedic(otherActor) && actor.x === otherActor.x && actor.y === otherActor.y) {
          return {
            x: actor.x,
            y: actor.y,
            color: colors.GREEN
          }
        }
      }

      return actor
    }
    return actor
  })
}
