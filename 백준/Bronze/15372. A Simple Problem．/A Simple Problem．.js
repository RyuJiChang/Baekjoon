const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt)
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(String(input[i] * input[i]))
}

console.log(result.join('\n'))