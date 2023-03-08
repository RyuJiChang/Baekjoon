const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(i = 1 ; i < input.length ; i++){
    const [a, b] = input[i].split(' ').map(Number)
    result.push(`Case #${i}: ${a+b}`)
}

console.log(result.join('\n'))