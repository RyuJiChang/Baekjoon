const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [Num1, Num2] = input[i].split(' ').map(Number)
    result.push(`Case ${i}: ${Num1 + Num2}`)
}

console.log(result.join('\n'))