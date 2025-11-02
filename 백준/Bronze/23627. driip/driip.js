const input = require('fs').readFileSync('/dev/stdin').toString().trim().slice(-5)

console.log(input == 'driip' ? 'cute' : 'not cute')