const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log('h' + 'e'.repeat(input.length *2 -4) + 'y')