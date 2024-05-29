const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log((a * (100-b)) / (b * (100-a)))