const [people, game] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const oneCycle = 4 * people - 2
console.log(game % oneCycle > 2 * people ? 2 * people - (game % oneCycle) % (2 * people) : game % oneCycle)

