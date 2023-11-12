const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = [input[0], input[1]]
const x = BigInt(input[0])

for(let i = input[1].length -1 ; i >= 0 ; i--){
    result.push(x * BigInt(input[1][i]))
}

result.push(x * BigInt(input[1]))

console.log(result.join('\n'))
