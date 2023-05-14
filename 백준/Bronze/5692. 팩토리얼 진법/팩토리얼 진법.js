const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const factorial = [0,1,2,6,24,120]
const result = []

for(let i = 0 ; i < input.length-1 ; i++){
    const length = input[i].length
    const arr = input[i].split('').map(Number)
    let sum = 0
    for(let j = 0 ; j < length ; j++){
        sum += arr[j] * factorial[length-j]
    }
    result.push(sum)
}

console.log(result.join('\n'))