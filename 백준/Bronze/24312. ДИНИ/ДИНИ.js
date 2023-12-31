const [a,b,c,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number).sort((a,b) => a-b)
const two = Math.abs(a-b-c+d)
const three = Math.abs(a+b+c-d)

console.log(Math.min(two, three))
