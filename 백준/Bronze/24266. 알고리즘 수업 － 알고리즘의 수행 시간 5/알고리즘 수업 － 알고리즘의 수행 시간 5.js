const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())
console.log(String(input**3n))
console.log(3)