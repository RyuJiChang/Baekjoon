const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = 0 ; i < input.length ; i++){
    const arr = input[i]
    arr.push(1)
    arr.unshift(1)
    const newArr = []
    for(let j = 1 ; j < arr.length - 1 ; j++){
        newArr.push(arr[j-1] * arr[j] * arr[j+1])
    }
    result.push(newArr.join(' '))
}

console.log(result.join('\n'))