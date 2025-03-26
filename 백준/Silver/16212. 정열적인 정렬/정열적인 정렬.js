const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))[1].sort((a,b) => a - b)
console.log(input.join(' '))