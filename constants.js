module.exports = {
  GRID_RESOLUTION: 100,
  NUM_ACTORS: 1000,
  INTERVAL: 150,
  START_INFECTED: 100,
  START_MEDICS: 20,
  RED: () => ({ r: 255, g: 0, b: 0 }),
  GREEN: () => ({ r: 0, g: 255, b: 0 }),
  BLUE: () => ({ r: 0, g: 0, b: 255 }),
  WHITE: () => ({ r: 255, g: 255, b: 255 })
}