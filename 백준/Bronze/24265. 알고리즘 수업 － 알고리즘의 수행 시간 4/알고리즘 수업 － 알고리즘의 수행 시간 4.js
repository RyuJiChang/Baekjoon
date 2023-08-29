const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(String(input*(input-1n)/2n))
console.log(2)