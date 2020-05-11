const isInfected = require('./utils').isInfected
const colors = require('./constants').colors
 
module.exports = actors => {
  return actors.map((actor, i, actors) => {
    if (!isInfected(actor)) {
      for (let i = 0; i < actors.length; i++) {
        const otherActor = actors[i]
        if (isInfected(otherActor) && actor.x === otherActor.x && actor.y === otherActor.y) {
          return {
            x: actor.x,
            y: actor.y,
            color: colors.RED
          }
        }
      }

      return actor
    }
    return actor
  })
}
