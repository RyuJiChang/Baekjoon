const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 0 ; i < input.length -1 ; i++){
    const [a1, b1, b2, a2] = input[i].split(' ').map(Number)
    result.push(`${b2-b1} ${a2-a1}`)
}

console.log(result.join('\n'))