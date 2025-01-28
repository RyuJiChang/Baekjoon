const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(input.reduce((a,b) => a+b) - Math.min(...input))