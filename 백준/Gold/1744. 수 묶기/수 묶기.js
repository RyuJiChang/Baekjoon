const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

input.shift()
input.sort((a,b) => a-b)

let left = 0
let right = input.length-1

let sum = 0

while (input[left] <= 0) {
    if(input[left + 1] <= 0){
        sum += input[left] * input[left+1]
        left++
    }
    else{
        sum += input[left]
    }
    left++
}

while (input[right] > 0) {
    if(input[right - 1] > 1){
        sum += input[right] * input[right-1]
        right--
    }
    else{
        sum += input[right]
    }
    right --
    
}

console.log(sum)