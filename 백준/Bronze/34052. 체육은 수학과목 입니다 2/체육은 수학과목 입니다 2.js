const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let sum = 300

for(let i = 0 ; i < input.length ; i++){
    sum += input[i]
}

console.log(sum <= 1800 ? 'Yes' : 'No')