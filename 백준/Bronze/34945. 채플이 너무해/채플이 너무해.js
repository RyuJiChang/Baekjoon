const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(input >= 6 ? 'Success!' : 'Oh My God!')