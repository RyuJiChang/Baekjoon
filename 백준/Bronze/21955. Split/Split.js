const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(input.slice(0,input.length/2), input.slice(input.length/2))