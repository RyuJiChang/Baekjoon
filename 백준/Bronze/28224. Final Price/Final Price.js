const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let result = 0

for(let i = 1 ; i < input.length ; i++){
    result += input[i]
}

console.log(result)