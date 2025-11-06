const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(BigInt).sort((a,b) => a < b ? -1 : 1)

let result = 0n
let prefix = 0n

for(let i = 0; i < input.length; i++){
  result += input[i] * BigInt(i) - prefix
  prefix += input[i]
}

console.log(String(result * 2n))