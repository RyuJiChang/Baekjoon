const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
console.log(Math.ceil(Math.max(...input[1]) * input[0][1] / 1000))