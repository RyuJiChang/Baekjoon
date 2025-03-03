const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 1 ; i < input.length ; i++){
    const[x, y] = input[i]
    result.push(Math.abs(x - y).toFixed(1))
}

console.log(result.join('\n'))