const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input[1].split(' ').map(Number)
let sorted = [...new Set(arr)].sort((a,b) => a-b)
let obj = {}
let result = []

for(let i = 0 ; i < sorted.length ; i++){
    obj[sorted[i]] = i
}

for(let i = 0 ; i < arr.length ; i++){
    result.push(obj[arr[i]])
}

console.log(result.join(' '))