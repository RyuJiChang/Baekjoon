const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const x = input[1].split(' ')
const y = input[2].split(' ')
const result = []

for(let i = 4 ; i < input.length ; i++){
    result.push(x[(input[i] - 1) % x.length] + y[(input[i] - 1) % y.length])
}

console.log(result.join('\n'))