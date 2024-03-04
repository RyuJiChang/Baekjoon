const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const power = Number(input[1])
const arr = input[2].split(' ').map(Number)
let count = 0

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i]**power > 0){
        count += arr[i]**power
    }
}

console.log(count)