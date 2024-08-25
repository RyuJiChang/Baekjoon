const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

console.log(input[1][0] - input[0][0] - (input[1][1] * 30 + input[1][2] - input[0][1] * 30 - input[0][2] < 0 ? 1 : 0))
console.log(input[1][0] - input[0][0] + 1)
console.log(input[1][0] - input[0][0])