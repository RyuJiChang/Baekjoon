const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(input.toString(2))
