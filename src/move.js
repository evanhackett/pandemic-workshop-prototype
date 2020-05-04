module.exports = ({ randomDir }) => {
  return actors => {
    return Object.freeze(actors.map(actor => {
      const randomDirection = randomDir()
      return Object.freeze({
        x: actor.x + randomDirection.x,
        y: actor.y + randomDirection.y,
        color: actor.color
      })
    }))
  }
}
