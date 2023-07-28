const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    sum += input[i]
}

console.log(Math.min(input.length - sum, sum))