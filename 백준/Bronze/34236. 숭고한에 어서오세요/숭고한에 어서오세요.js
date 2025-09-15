const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
console.log(input[input.length - 1 ] + input[1] - input[0])