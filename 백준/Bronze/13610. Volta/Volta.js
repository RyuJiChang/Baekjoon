const [a, b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const gab = b-a

console.log(Math.ceil(a/gab)+1)