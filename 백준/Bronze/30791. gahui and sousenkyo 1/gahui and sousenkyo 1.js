const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(input.filter(el => el >= (input[0] - 1000)).length - 1)