const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
console.log(input.length > 8 ? 'satisfactory' : 'unsatisfactory')