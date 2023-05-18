const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [a,b] = input[1].split(' ').map(Number)
console.log(Number(input[0])**2 - (a/2 - b/2)**2)