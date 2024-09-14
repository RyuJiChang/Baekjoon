const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => `${el} ${el}`)

input.shift()
console.log(input.join('\n'))