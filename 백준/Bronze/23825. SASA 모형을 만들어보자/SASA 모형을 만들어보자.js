const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
console.log(Math.floor(Math.min(input[0], input[1]) / 2))