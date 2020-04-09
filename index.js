const drawGrid = require('./grid-to-canvas.js')

const canvas = document.getElementById('canvas')
const dnode_infectedCount = document.getElementById('infectedCount')
const dnode_turnCount = document.getElementById('turnCount')
const dnode_healthyCount = document.getElementById('healthyCount')

const GRID_RESOLUTION = 250
const NUM_ACTORS = 7500
const INTERVAL = 100
const START_INFECTED = 1

let infected = 0
let turnCount = 0
const grid = Array(GRID_RESOLUTION).fill(0).map(x => Array(GRID_RESOLUTION).fill(0))


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

  grid.forEach((row, i) => {
    row.forEach((_, j) => {
      grid[i][j] = null
    })
  })

  actors.forEach(actor => {
    grid[actor.x][actor.y] = actor
  })

  return grid
}

function updateInfectedCount() {
  infected++
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
        if (actor !== other && !isInfected(other)) {
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
  updateInfectedCount()
}


const actors = makeActors(NUM_ACTORS)

for (let i = 0; i < START_INFECTED; i++) {
  infect(actors[i])
}


const interval = setInterval(function () {

  drawGrid(canvas, actorsToGrid(actors), val => val ? val.colors : { r: 0, g: 0, b: 0 })
  moveActors(actors)
  turnCount++

  dnode_infectedCount.innerText = infected
  dnode_healthyCount.innerText = NUM_ACTORS - infected
  dnode_turnCount.innerText = turnCount

}, INTERVAL)