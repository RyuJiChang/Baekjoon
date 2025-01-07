const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = input * (input - 1) * (input - 2 ) * (input - 3) / 24
console.log( result >= 1 ? result : 0)