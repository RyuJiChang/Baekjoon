const input = require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(input.slice(input.length-3) == 'eh?' ? 'Canadian!' : 'Imposter!')