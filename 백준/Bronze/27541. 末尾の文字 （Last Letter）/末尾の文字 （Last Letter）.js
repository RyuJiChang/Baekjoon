const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]

console.log(input[input.length - 1] == 'G' ? input.slice(0,input.length-1) : input + 'G')