const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    result.push(input[i] * (input[i] + 1) / 2)
}

console.log(result.join('\n'))