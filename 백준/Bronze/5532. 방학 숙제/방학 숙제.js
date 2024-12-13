const [l,a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

console.log(Math.max(0, l - Math.max(Math.ceil(a / c), Math.ceil(b/d))))