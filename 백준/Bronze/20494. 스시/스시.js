const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    sum += input[i].length
}

console.log(sum)