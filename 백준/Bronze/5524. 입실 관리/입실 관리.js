const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(input[i].toLowerCase())
}

console.log(result.join('\n'))