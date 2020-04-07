(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// canvas is the dom node of the canvas to draw to
// grid is the 2d array of data to draw
// colorFn defines how to color a cell based on the cell's data
module.exports = function (canvas, grid, colorFn) {
  const ctx = canvas.getContext('2d')

  function colorCell(x, y, color) {
    // calculate dimensions of a cell based on the grid resolution and the canvas resolution. Assumes square canvas and grid.
    const cellSize = canvas.width / grid.length
    ctx.fillStyle = `rgb(${color.r},${color.g},${color.b})`
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
  }

  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      colorCell(i, j, colorFn(cell))
    })
  })
}
},{}],2:[function(require,module,exports){
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
},{"./grid-to-canvas.js":1}]},{},[2]);
