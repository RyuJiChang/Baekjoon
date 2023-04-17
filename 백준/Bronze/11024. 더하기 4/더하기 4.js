const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ').map(Number)
    let sum = 0
    for(let j = 0 ; j < arr.length ; j++){
        sum += arr[j]
    }
    result.push(sum)
}

console.log(result.join('\n'))