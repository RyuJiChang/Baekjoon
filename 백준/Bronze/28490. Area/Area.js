const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ')).map(el => el[0] * el[1])
input.shift()
console.log(Math.max(...input))