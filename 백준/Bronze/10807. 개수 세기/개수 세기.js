const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const arr = input[1].split(' ')
let count = 0
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === input[2]) count++
}

console.log(count)