const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

console.log(Math.min(input[0][0] + input[1][1], input[0][1] + input[1][0]))