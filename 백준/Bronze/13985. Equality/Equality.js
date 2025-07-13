const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log((input[0]*1 + input[4]*1) == input[8] ? 'YES' : 'NO')