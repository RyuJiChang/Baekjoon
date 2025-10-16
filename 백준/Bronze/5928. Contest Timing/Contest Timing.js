const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const target = 16511
let sum = input[0] * 1440 + input[1] * 60 + input[2] * 1

console.log(sum - target >= 0 ? sum - target : -1)