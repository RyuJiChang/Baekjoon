const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [start, target] = input[0].split(' ').map(Number)

let result = Math.abs(start - target)

for(let i = 2 ; i < input.length ; i++){
    result = Math.min(Math.abs(target - Number(input[i])) + 1, result)
}

console.log(result)