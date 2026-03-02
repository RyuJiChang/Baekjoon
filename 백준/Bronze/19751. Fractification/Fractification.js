const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)
console.log(input[0], input[2], input[1], input[3])