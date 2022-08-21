const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let nums = Number(input[0])
let arr = input[1].split(' ').map(Number)
let max = arr[0]
let maxNow = max

for(let i = 1 ; i < nums ; i++){
    if(maxNow < 0){
        maxNow = 0
    }
    maxNow = maxNow + arr[i]
    max = Math.max(max, maxNow)
}

console.log(max)