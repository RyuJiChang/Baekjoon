const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(el => el.split('').reverse().join('')).join(' '))

input.pop()

console.log(input.join('\n'))