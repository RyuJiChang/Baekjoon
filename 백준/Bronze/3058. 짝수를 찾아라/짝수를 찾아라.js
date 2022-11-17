let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = []

for(let i = 1 ; i < input.length ; i++){
    let arr = input[i].split(' ').map(Number).filter(el => el%2 === 0).sort((a,b) => a-b)
    let sum = 0
    let min = arr[0]
    for(let j = 0 ; j < arr.length ; j++){
        sum += arr[j]
    }
    result.push(`${sum} ${min}`)
}

console.log(result.join('\n'))