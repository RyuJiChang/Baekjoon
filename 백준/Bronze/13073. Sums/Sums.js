const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(`${(input[i] + 1) * input[i] / 2} ${input[i] * input[i]} ${input[i] * (input[i] + 1)}`)
}

console.log(result.join('\n'))