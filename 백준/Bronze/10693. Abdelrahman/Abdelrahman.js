const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [x, y] = input[i].split(' ').map(Number)
    result.push(`Case ${i}: ${y - x + 1}`)
}

console.log(result.join('\n'))