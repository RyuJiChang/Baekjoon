let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').sort((a,b) => b-a).join('')
console.log(input)