const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.shift()

let maxL = 0
let countL = 0
let maxR = 0
let countR = 0

for(let i = 0 ; i < input.length ; i++){
    if(maxL < input[i]){
        countL++
        maxL = Math.max(maxL, input[i])
    }
}

for(let i = input.length - 1 ; i >= 0 ; i--){
    if(maxR < input[i]){
        countR++
        maxR = Math.max(maxR, input[i])
    }
}

console.log(countL)
console.log(countR)