module.exports = ({ colors }) => {
  function infected (actor) {
    return actor.color.r === colors.RED.r
  }

  return actors => {
    return actors.map((actor, i, actors) => {
      if (!infected(actor)) {
        for (let i = 0; i < actors.length; i++) {
          const otherActor = actors[i]
          if (infected(otherActor) && actor.x === otherActor.x && actor.y === otherActor.y) {
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
}
