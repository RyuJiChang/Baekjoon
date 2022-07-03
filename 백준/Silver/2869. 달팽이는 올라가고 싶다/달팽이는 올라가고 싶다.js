const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
let [a,b,c] = [...input]
console.log(Math.ceil((c-b)/(a-b)))