const [h1, m1, h2, m2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const start = h1 * 60 + m1
const end = h2 * 60 + m2
const totalTime = (1440 + end - start) % 1440
console.log(totalTime, Math.floor(totalTime/30))