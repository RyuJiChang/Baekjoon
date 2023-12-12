const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [x, a, b] = input[i].split(' ').map(Number)
    result.push(`${Math.max(0, a-b)} ${Math.min(x - b, a)}`)
}

console.log(result.join('\n'))