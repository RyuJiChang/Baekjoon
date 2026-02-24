const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let sum = input[0] * input[1]

for(let i = 3 ; i < input.length ; i++){
    sum += input[i]
}

console.log(sum)