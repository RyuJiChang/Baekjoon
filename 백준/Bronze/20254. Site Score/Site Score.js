const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

console.log(a*56 + b*24 + c*14 + d*6)