const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())

const x = 2n**input - 1n
console.log((x * (x + 1n) / 2n).toString(2))