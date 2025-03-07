const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [nums, people] = input.shift().split(' ').map(Number)

console.log(input.map(el => el.split('').filter(el => el == 'O').length > Math.floor(people / 2)).filter(el => el).length)