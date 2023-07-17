const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).filter(el => el > 0)

console.log(input.length)