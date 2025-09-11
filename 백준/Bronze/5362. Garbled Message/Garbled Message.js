const input = require('fs').readFileSync('/dev/stdin').toString().trim()

console.log(input.replaceAll('iiing','th'))