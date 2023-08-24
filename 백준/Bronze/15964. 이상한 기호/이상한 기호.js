const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const result = a * a - b * b
console.log(result)