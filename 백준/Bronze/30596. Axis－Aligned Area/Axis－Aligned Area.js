const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b) => a-b)
console.log(a * c)