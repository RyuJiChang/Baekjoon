const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))[1]
let maxCount = 0
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i]){
        count++
        maxCount = Math.max(maxCount, count)
    }
    else{
        count = 0
    }
}

console.log(maxCount)