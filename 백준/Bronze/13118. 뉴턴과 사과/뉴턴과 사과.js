const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
console.log(input[0].indexOf(input[1][0]) + 1)