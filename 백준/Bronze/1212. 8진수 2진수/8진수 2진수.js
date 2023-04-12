const input = '0O' + require('fs').readFileSync('/dev/stdin').toString().trim()
console.log(BigInt(input).toString(2))