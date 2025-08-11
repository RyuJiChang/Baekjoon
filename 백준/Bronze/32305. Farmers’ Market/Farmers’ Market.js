const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
console.log(Math.ceil(input[0][0] * input[0][1] / 12) * input[1][0])