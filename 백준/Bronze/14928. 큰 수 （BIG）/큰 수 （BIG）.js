const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(String(input %20000303n))