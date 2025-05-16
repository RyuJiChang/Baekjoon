const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b) => a - b)

console.log((input[0] + input[1]) == input[2] ? 1 : 0)