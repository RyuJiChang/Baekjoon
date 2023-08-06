const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let sum = 0
for(let i = 1 ; i < input.length ; i++){
    sum += input[i]
}

console.log(Math.min(sum, input[0] - sum))