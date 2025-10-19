const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let result = 0

for(let i = 0 ; i < input.length ; i++){
    result += input[i]**5
}

console.log(result)