let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).slice(1).sort((a,b) => b-a)

console.log(input.join('\n'))