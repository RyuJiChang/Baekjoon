const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(input.split('(^0^)').map(el => el.split('').filter(el => el == '@').length).join(' '))