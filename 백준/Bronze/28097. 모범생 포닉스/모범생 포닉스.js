const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let sum = input.length * 8 - 8

for(let i = 0 ; i < input.length ; i++){
    sum += input[i]
}

console.log(Math.floor(sum / 24), sum % 24)