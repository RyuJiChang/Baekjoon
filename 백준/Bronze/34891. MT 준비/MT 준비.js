const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
console.log(Math.ceil(input[0]/input[1]))