const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(Number).sort((a,b) => a-b)
console.log(a,b,c)