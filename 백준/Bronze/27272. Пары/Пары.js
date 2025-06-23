const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)

console.log(a*b + c*d)