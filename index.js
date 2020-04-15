const drawGrid = require('./grid-to-canvas.js')
const constants = require('./constants.js')
const { Actor, Infected } = require('./actor.js')

const canvas = document.getElementById('canvas')
const dnode_infectedCount = document.getElementById('infectedCount')
const dnode_turnCount = document.getElementById('turnCount')
const dnode_healthyCount = document.getElementById('healthyCount')

let infected = 0
let turnCount = 0
const grid = Array(constants.GRID_RESOLUTION).fill(0).map(x => Array(constants.GRID_RESOLUTION).fill(0))

function makeActors(numActors) {

  const actors = []

  for (let i = 0; i < numActors; i++) {

    actors.push(
      new Actor({
        x: Math.floor(Math.random() * constants.GRID_RESOLUTION),
        y: Math.floor(Math.random() * constants.GRID_RESOLUTION),
      })
    )
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
    actor.move(actors, updateInfectedCount)
  })
}



const actors = makeActors(constants.NUM_ACTORS)

for (let i = 0; i < constants.START_INFECTED; i++) {
  Infected.infect(actors, actors[i], i, updateInfectedCount)
}


const interval = setInterval(function () {

  drawGrid(canvas, actorsToGrid(actors), val => val ? val.color : { r: 0, g: 0, b: 0 })
  moveActors(actors)
  turnCount++

  dnode_infectedCount.innerText = infected
  dnode_healthyCount.innerText = constants.NUM_ACTORS - infected
  dnode_turnCount.innerText = turnCount

}, constants.INTERVAL)