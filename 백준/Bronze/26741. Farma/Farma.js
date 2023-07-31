const [head, leg] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const cow = (leg - head * 2)/2
console.log(head - cow, cow)