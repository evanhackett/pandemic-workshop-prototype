const drawGrid = require('./grid-to-canvas.js')

const canvas = document.getElementById('canvas')

const GRID_RESOLUTION = 50

const NUM_ACTORS = 3 // this is hard coded rn

const red = () => ({ r: 255, g: 0, b: 0 })
const green = () => ({ r: 0, g: 255, b: 0 })
const blue = () => ({ r: 0, g: 0, b: 255 })

function actorsToGrid(actors) {
  const grid = Array(GRID_RESOLUTION).fill(0).map(x => Array(GRID_RESOLUTION).fill(0))

  actors.forEach(actor => {
    console.log(actor)
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
}

const actors = [{ x: 1, y: 1, colors: red() }, { x: 25, y: 25, colors: green() }, { x: 3, y: 3, colors: blue() }]

const INTERVAL = 250

const interval = setInterval(function () {

  drawGrid(canvas, actorsToGrid(actors), val => val ? val.colors : { r: 0, g: 0, b: 0 })

  moveActors(actors)

}, INTERVAL)