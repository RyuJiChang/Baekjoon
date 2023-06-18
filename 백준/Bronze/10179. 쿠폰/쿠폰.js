const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []

for(let i = 1 ; i < input.length ; i++){
    result.push(`$${(input[i]*0.8).toFixed(2)}`)
}

console.log(result.join('\n'))