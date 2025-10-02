const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

console.log(Math.ceil(input[1][0] / 100) * input[0][0] + Math.ceil(input[1][1] / 50) * input[0][1] + Math.ceil(input[1][2] / 20) * input[0][2])