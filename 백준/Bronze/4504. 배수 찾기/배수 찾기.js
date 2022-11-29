let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []
for(let i = 1 ; i < input.length-1 ; i++){
    result.push(`${input[i]} is ${input[i] % input[0] ? 'NOT ':''}a multiple of ${input[0]}.`)
}

console.log(result.join('\n'))