const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]

let result = 0
for(let i = 0 ; i < input.length ; i++){
    result += input[i].charCodeAt(0)-64
}

console.log(result)