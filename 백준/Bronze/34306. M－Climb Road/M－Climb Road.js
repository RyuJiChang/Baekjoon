const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(Math.floor(5280 * input[0] / input[1]))