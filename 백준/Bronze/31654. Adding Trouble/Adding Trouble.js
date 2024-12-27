const [a, b, c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(a + b == c ? 'correct!' : 'wrong!')