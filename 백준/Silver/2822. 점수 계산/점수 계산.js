const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const resultArr = []
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    input[i] = [input[i], i + 1]
}

input.sort((a,b) => b[0] - a[0])

for(let i = 0 ; i < 5 ; i++){
    sum += input[i][0]
    resultArr.push(input[i][1])
}

console.log(sum)
console.log(resultArr.sort((a,b) => a - b).join(' '))