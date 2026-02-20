const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())

console.log(String(input * 2n))