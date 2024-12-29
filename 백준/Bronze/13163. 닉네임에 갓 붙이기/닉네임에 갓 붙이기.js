const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
input.shift()
input.forEach(el => el[0] = 'god')

console.log(input.map(el => el.join('')).join('\n'))