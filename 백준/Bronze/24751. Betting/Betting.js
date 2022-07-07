const a = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)[0]
console.log(100/a)
console.log(100/(100-a))