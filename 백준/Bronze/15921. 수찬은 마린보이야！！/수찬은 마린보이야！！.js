const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(input[0] == '0' ? 'divide by zero' : '1.00')