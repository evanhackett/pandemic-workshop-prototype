module.exports = ({ randomPos, colors }) => {
  return (NUM_ACTORS) => {
    const actors = []
    for (let i = 0; i < NUM_ACTORS; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.GREEN }))
    }
    return Object.freeze(actors)
  }
}
