const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('-')
let result = ''

for(let i = 0 ; i < input.length ; i++){
    result += input[i][0]
}

console.log(result)