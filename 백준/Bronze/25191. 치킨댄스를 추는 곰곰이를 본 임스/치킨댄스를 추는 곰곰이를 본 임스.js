const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
console.log(Math.min(input[0][0], Math.floor(input[1][0] / 2) + Math.floor(input[1][1])))