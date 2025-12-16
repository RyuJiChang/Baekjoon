const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log((input <= 100000) && (input % 2024) == 0 ? 'Yes' : 'No')