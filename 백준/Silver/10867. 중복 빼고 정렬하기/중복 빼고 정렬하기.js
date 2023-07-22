const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
result = [...new Set(input)].sort((a, b) => a - b)

console.log(result.join(' '))