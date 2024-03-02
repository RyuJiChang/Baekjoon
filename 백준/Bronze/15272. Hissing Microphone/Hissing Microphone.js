const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(input.includes('ss') ? 'hiss' : 'no hiss')