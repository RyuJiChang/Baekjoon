const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))

input.shift()
input.sort((a,b) => a[1] - b[1])

console.log(input[0][0])