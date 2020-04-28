const test = require('tape')
const actorF = require('../src/actor')
const infectedF = require('../src/infected')
const constants = require('../src/constants')
const randomF = require('../src/random')

const random = randomF({ randomDir: () => 0.999999 })

test('move move move', t => {
  t.plan(5)

  const ActorMove = moveF(() => { t.pass() })
  const InfectedMove = moveF(() => {
    infect(actors)
    t.pass()
  })
  const Actor = actorF({ randomDir: random.direction, move: ActorMove })
  const Infected = actorF({ randomDir: random.direction, move: InfectedMove })

  const actors = [actor(2, 2)]
  const i = Infected(1, 1)

  t.deepEqual(i.move(actors), { x: 2, y: 2, color: constants.colors.RED })
  t.deepEqual(actors[0].move(), { x: 2, y: 2, color: constants.colors.RED })

  t.end()
})

// test('infected.move should infect actors on the same postition as the infected and return "this" infected\'s position and color', t => {

//   const Actor = actorF({ randomDir: random.direction })
//   const Infected = infectedF(Actor)
//   const actors = [actor(2, 2)]
//   const i = Infected(1, 1)

//   t.deepEqual(i.move(actors), { x: 2, y: 2, color: constants.colors.RED })
//   t.deepEqual(actors[0].move(), )

//   t.end()
// })