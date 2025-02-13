const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(String(input[0] + input[1]).length)