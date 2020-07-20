const { isInfected, isMedic } = require('./utils')

module.exports = ({ moveActor }) => {
  function getClosestActor (actor, actors) {
    const distance = (x, y) => {
      const a = Math.abs(actor.x - x)
      const b = Math.abs(actor.y - y)
      const c = Math.sqrt(a * a + b * b)

      return c
    }

    let closest = { x: Infinity, y: Infinity }
    actors.forEach(otherActor => {
      if (isInfected(otherActor)) {
        if (distance(otherActor.x, otherActor.y) < distance(closest.x, closest.y)) {
          closest = otherActor
        }
      }
    })

    return closest.x === Infinity ? null : closest
  }

  function getNewPosition (actor, target) {
    if (!target) return actor

    const directionX = actor.x < target.x ? 1 : actor.x === target.x ? 0 : -1
    const directionY = actor.y < target.y ? 1 : actor.y === target.y ? 0 : -1

    return {
      x: actor.x + directionX,
      y: actor.y + directionY
    }
  }

  return actors => {
    return Object.freeze(actors.map(actor => {
      if (isMedic(actor)) {
        // Find a target direction
        const target = getClosestActor(actor, actors)
        const position = getNewPosition(actor, target)
        return Object.freeze({
          x: position.x,
          y: position.y,
          color: actor.color
        })
      } else {
        return Object.freeze(moveActor(actor))
      }
    }))
  }
}
