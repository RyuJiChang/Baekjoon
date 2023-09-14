const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a, b, c] = input[i].split(' ').map(Number)
    result.push(input[i] + ' ' +((a + b + c) === 180 ? 'Seems OK' : 'Check'))
}

console.log(result.join('\n'))