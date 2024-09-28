const [r,c,n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(Math.ceil(r / n) * Math.ceil(c / n))