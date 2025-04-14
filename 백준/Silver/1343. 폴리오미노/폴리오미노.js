const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('XXXX').join('AAAA').split('XX').join('BB')
console.log(input.includes('X') ? -1 : input)