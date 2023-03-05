const input = require('fs').readFileSync('/dev/stdin').toString().split(" ").map(Number)
console.log((input[0]**2 + input[1]**2 + input[2]**2 + input[3]**2 + input[4]**2)%10)
