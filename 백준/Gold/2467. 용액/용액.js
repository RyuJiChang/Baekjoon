const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let left = 0
let right = input.length - 1
let min = Infinity
let result = ''

while(left != right){
    let sum = input[left] + input[right]
    if(Math.abs(sum) < min){
        min = Math.min(Math.abs(sum), min)
        result = `${input[left]} ${input[right]}`
    }
    if(sum >= 0){
        right--
    }
    else{
        left++
    }
}

console.log(result)