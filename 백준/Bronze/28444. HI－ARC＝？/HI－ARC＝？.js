const [a,b,c,d,e] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(a*b - c*d*e)