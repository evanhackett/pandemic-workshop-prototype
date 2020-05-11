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