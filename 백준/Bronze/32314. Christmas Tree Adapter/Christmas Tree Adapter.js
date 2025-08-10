const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
console.log(input[0][0] <= (input[1][0] / input[1][1]) ? 1 : 0)