const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(Math.floor((-1 + Math.sqrt(1 + 8 * input)) / 2))