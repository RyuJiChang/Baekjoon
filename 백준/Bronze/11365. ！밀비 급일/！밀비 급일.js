const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    result.push(input[i].split('').reverse().join(''))
}

console.log(result.join('\n'))