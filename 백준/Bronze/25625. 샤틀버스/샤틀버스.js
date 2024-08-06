const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
console.log((input[0]+ input[1]) % (input[0] * 2))