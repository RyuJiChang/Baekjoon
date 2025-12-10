const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(input <= 10000 ? 'Accepted' : 'Time limit exceeded')