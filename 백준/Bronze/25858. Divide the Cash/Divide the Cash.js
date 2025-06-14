const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [num, total] = input[0].split(' ').map(Number)
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    sum += Number(input[i])
}

for(let i = 1 ; i < input.length ; i++){
    console.log(total / sum * input[i])
}