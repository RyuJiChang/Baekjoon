const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let max = 0
let min = Infinity
let sum = 0
for(let i = 1 ; i < input.length ; i++){
    const [a, b] = input[i]
    const result = a/b
    sum += result
    min = Math.min(min, result)
    max = Math.max(max, result)
}

console.log(min, max, sum)