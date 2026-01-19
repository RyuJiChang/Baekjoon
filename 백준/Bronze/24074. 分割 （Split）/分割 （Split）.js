const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const max = Math.max(...input)
const index = input.indexOf(max)
let left = 0
let right = 0

for(let i = 0 ; i < index ; i++){
    left += input[i]
}

for(let i = index + 1 ; i < input.length ; i++){
    right += input[i]
}

console.log(left)
console.log(right)