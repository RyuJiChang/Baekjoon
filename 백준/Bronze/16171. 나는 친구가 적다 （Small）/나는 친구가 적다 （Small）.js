const input = require('fs').readFileSync('/dev/stdin').toString().trim().replaceAll(/\d/g, '').split('\n')

console.log(input[0].includes(input[1]) ? 1 : 0)