const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log((input[0] + input[2]) == input[4] ? 'YES' : 'NO')