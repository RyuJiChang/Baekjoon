const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const area = input[0] * input[1] / 2
console.log(area.toFixed(1))