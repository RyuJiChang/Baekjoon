const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push('='.repeat(input[i]))
}

console.log(result.join('\n'))