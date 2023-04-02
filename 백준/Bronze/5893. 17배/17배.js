const input = '0b' + require('fs').readFileSync('/dev/stdin').toString().trim()
console.log((BigInt(input)*17n).toString(2))
