const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a, b, n] = input[i].split(' ').map(Number)
    result.push((n - 1) * a + b)
}

console.log(result.join('\n'))