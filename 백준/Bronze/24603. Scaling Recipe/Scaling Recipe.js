const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [length,x,y] = input.shift().split(' ').map(Number)
const result = []

for(let i = 0 ; i < input.length ; i++){
    result.push(input[i] * y / x)
}

console.log(result.join('\n'))