const [n,a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

console.log(Math.min(Math.ceil(n / a) * b, Math.ceil(n / c) * d))