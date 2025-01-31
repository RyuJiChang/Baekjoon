const [a, x, b, y, t] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let aRoute = a + Math.max(0, t - 30) * x * 21
let bRoute = b + Math.max(0, t - 45) * y * 21

console.log(aRoute, bRoute)