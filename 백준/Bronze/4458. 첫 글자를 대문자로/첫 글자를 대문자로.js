let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(input[i][0].toUpperCase() + input[i].slice(1))
}

console.log(result.join('\n'))