const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let maxCount = 1
let count = 1
let now = input[0]

for(let i = 1 ; i < input.length ; i++){
    if(now < input[i]){
        count++
        now = input[i]
        maxCount = Math.max(maxCount, count)
    }
    else{
        count = 1
        now = input[i]
    }
}

console.log(maxCount)