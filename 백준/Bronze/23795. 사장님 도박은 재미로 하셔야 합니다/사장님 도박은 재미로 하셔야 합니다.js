const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let result = 0

for(let i = 0 ; i < input.length-1 ; i++){
    result += input[i]
}

console.log(result)