const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number)
const weight = [2, 7, 6, 5, 4, 3, 2]
const target = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Z']
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    sum += input[i] * weight[i]
}

console.log(target[sum%11])