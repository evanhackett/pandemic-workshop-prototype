const drawGrid = require('./grid-to-canvas.js')

const canvas = document.getElementById('canvas')

const GRID_RESOLUTION = 50
const NUM_ACTORS = 100
const INTERVAL = 100


const red = () => ({ r: 255, g: 0, b: 0 })
const green = () => ({ r: 0, g: 255, b: 0 })
const blue = () => ({ r: 0, g: 0, b: 255 })

function makeActors(numActors) {

  const actors = []

  for (let i = 0; i < numActors; i++) {
    actors.push({
      x: Math.floor(Math.random() * GRID_RESOLUTION),
      y: Math.floor(Math.random() * GRID_RESOLUTION),
      colors: red()
    })
  }

  return actors
}

function actorsToGrid(actors) {
  const grid = Array(GRID_RESOLUTION).fill(0).map(x => Array(GRID_RESOLUTION).fill(0))

  actors.forEach(actor => {
    grid[actor.x][actor.y] = actor
  })

  return grid
}

function moveActors(actors) {
  actors.forEach(actor => {

    const directions = [-1, 0, 1]

    const randomIndexX = Math.round(Math.random() * 2)
    const randomIndexY = Math.round(Math.random() * 2)
    // console.log(randomIndexX, randomIndexY)

    const wrapCoord = n => n < 0 ? GRID_RESOLUTION - 1 : n >= GRID_RESOLUTION - 1 ? 0 : n

    actor.x = wrapCoord(actor.x + directions[randomIndexX])
    actor.y = wrapCoord(actor.y + directions[randomIndexY])
  })

  actors.forEach(actor => {
    if (isInfected(actor)) {
      actors.forEach(other => {
        if (actor !== other) {
          if ((actor.x === other.x) && (actor.y === other.y)) {
            infect(other)
          }
        }
      })
    }
  })
}

function isInfected(actor) {
  return actor.colors.g === 255
}

function infect(actor) {
  actor.colors = green()
}


const actors = makeActors(NUM_ACTORS)
actors.push({ x: 25, y: 25, colors: green() })


const interval = setInterval(function () {

  drawGrid(canvas, actorsToGrid(actors), val => val ? val.colors : { r: 0, g: 0, b: 0 })

  moveActors(actors)

}, INTERVAL)