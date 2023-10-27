const [a,b,x,y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log(Math.min(Math.abs(a-b),Math.abs(a-x) + Math.abs(b-y), Math.abs(a-y) + Math.abs(b-x)))