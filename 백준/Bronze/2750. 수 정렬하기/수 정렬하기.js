const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.shift()
input.sort((a,b) => a-b)
console.log(input.join('\n'))