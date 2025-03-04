const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).reduce((a,b) => a + b)

console.log(input > 4 ? 2 : 1)