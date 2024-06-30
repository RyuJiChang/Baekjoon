const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.round(input[0]/10**input[1]) * 10**input[1])