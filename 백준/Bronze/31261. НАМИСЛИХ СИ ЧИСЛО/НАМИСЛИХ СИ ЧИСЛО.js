const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(a**2 * (a + b + 1))