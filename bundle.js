(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = Object.freeze({
  GRID_RESOLUTION: 100,
  START_HEALTHY: 500,
  INTERVAL: 150,
  START_INFECTED: 500,
  START_MEDICS: 150,
  colors: {
    RED: Object.freeze({ r: 255, g: 0, b: 0 }),
    GREEN: Object.freeze({ r: 0, g: 255, b: 0 }),
    BLUE: Object.freeze({ r: 0, g: 0, b: 255 }),
    WHITE: Object.freeze({ r: 255, g: 255, b: 255 })
  }
})

},{}],2:[function(require,module,exports){
const constants = require('./constants')

module.exports = function (canvas, actors) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = `rgb(0,0,0)`
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  const cellSize = canvas.width / constants.GRID_RESOLUTION
  actors.forEach(actor => {
    ctx.fillStyle = `rgb(${actor.color.r},${actor.color.g},${actor.color.b})`
    ctx.fillRect(actor.x * cellSize, actor.y * cellSize, cellSize, cellSize)
  })
}

},{"./constants":1}],3:[function(require,module,exports){
const { isInfected, isMedic } = require('./utils')
const colors = require('./constants').colors
 
module.exports = actors => {
  return actors.map((actor, i, actors) => {
    if (isInfected(actor)) {
      for (let i = 0; i < actors.length; i++) {
        const otherActor = actors[i]
        if (isMedic(otherActor) && actor.x === otherActor.x && actor.y === otherActor.y) {
          return {
            x: actor.x,
            y: actor.y,
            color: colors.GREEN
          }
        }
      }

      return actor
    }
    return actor
  })
}

},{"./constants":1,"./utils":9}],4:[function(require,module,exports){
const constants = require('./constants')
const draw = require('./draw')
const random = require('./random')({ randomDir: Math.random, randomPos: Math.random, GRID_RESOLUTION: constants.GRID_RESOLUTION })
const move = require('./move')({ moveActor: random.moveActor })
const init = require('./init')({ randomPos: random.position })
const infect = require('./infect')
const heal = require('./heal')
const canvas = document.getElementById('canvas')
const infectedCount = document.getElementById('infectedCount')
const healthyCount = document.getElementById('healthyCount')
const turnCountNode = document.getElementById('turnCount')
const infectedSlider = document.getElementById('infectedSlider')
const healthySlider = document.getElementById('healthySlider')
const medicSlider = document.getElementById('medicSlider')
const infectedText = document.getElementById('infectedText')
const healthyText = document.getElementById('healthyText')
const medicText = document.getElementById('medicText')
let turnCount = 0
let actors = null

initializeSlider()

setInterval(function () {
  draw(canvas, actors)
  actors = heal(infect(move(actors)))
  turnCount++
  turnCountNode.textContent = turnCount
  updateStats(actors, infectedCount, healthyCount)
}, constants.INTERVAL)

function updateStats (actors, infectedCountNode, healthyCountNode) {
  const infectedCount = count(actors, actor => actor.color === constants.colors.RED)
  const healthyCount = count(actors, actor => actor.color === constants.colors.GREEN)

  infectedCountNode.textContent = infectedCount
  healthyCountNode.textContent = healthyCount
}

const count = (xs, predicate) => xs.reduce((acc, x) => predicate(x) ? acc + 1 : acc, 0)

function initializeSlider () {
  actors = init(healthySlider.value, infectedSlider.value, medicSlider.value)
  healthyText.value = healthySlider.value
  infectedText.value = infectedSlider.value
  medicText.value = medicSlider.value
  turnCount = 0
}

function initializeText () {
  actors = init(healthyText.value, infectedText.value, medicText.value)
  healthySlider.value = healthyText.value
  infectedSlider.value = infectedText.value
  medicSlider.value = medicText.value
  turnCount = 0
}

healthySlider.oninput = initializeSlider
infectedSlider.oninput = initializeSlider
medicSlider.oninput = initializeSlider

healthyText.oninput = initializeText
infectedText.oninput = initializeText
medicText.oninput = initializeText
},{"./constants":1,"./draw":2,"./heal":3,"./infect":5,"./init":6,"./move":7,"./random":8}],5:[function(require,module,exports){
const { isInfected, isMedic } = require('./utils')
const colors = require('./constants').colors
 
module.exports = actors => {
  return actors.map((actor, i, actors) => {
    if (!isInfected(actor) && !isMedic(actor)) {
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

},{"./constants":1,"./utils":9}],6:[function(require,module,exports){
const colors = require('./constants').colors

module.exports = ({ randomPos }) => {
  return (START_HEALTHY, START_INFECTED, START_MEDICS) => {
    const actors = []
    for (let i = 0; i < START_HEALTHY; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.GREEN }))
    }
    for (let i = 0; i < START_INFECTED; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.RED }))
    }
    for (let i = 0; i < START_MEDICS; i++) {
      const { x, y } = randomPos()
      actors.push(Object.freeze({ x, y, color: colors.WHITE }))
    }
    return Object.freeze(actors)
  }
}

},{"./constants":1}],7:[function(require,module,exports){
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

},{"./utils":9}],8:[function(require,module,exports){
function randomF ({ GRID_RESOLUTION, randomPos, randomDir }) {
  return {
    position: () => {
      return {
        x: Math.floor(randomPos() * GRID_RESOLUTION),
        y: Math.floor(randomPos() * GRID_RESOLUTION)
      }
    },
    moveActor: actor => {
      const directions = [-1, 0, 1]
      const directionX = directions[Math.round(randomDir() * 2)]
      const directionY = directions[Math.round(randomDir() * 2)]

      const x = actor.x + directionX >= GRID_RESOLUTION || actor.x + directionX < 0 ? actor.x - directionX : actor.x + directionX
      const y = actor.y + directionY >= GRID_RESOLUTION || actor.y + directionY < 0 ? actor.y - directionY : actor.y + directionY

      return { ...actor, x, y }
    }
  }
}
module.exports = randomF

},{}],9:[function(require,module,exports){
const constants = require('./constants')
const colors = constants.colors

function isMedic (actor) {
  return actor.color.r === colors.WHITE.r 
    && actor.color.g === colors.WHITE.g
    && actor.color.b === colors.WHITE.b
}

function isInfected (actor) {
  return actor.color.r === colors.RED.r 
    && actor.color.g === colors.RED.g
    &&  actor.color.b === colors.RED.b 
}

module.exports = {
  isMedic,
  isInfected
}
},{"./constants":1}]},{},[4]);
