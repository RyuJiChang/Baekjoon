const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [b, p] = input[i].split(' ').map(Number)
    const min = 60 / p * (b-1)
    const middle = 60 / p * b
    const max = 60 / p * (b+1)
    result.push(min.toFixed(4) + ' ' + middle.toFixed(4) + ' ' + max.toFixed(4))
}

console.log(result.join('\n'))