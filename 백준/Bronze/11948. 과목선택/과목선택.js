const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let sum = 0
for(let i = 0 ; i < input.length ; i++){
    sum += input[i]
}
sum -= Math.min(...input.slice(0,4)) + Math.min(...input.slice(4,6))
console.log(sum)