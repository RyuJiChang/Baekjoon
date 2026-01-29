const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(el => el[0])

console.log(input.filter(el => el == input[0]).length == input.length ? 1 : 0)