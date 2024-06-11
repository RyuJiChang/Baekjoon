const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let arr = []
let sum = 0
for(let i = 1 ; i <= 50 ; i++){
    for(let j = 0 ; j < i ; j++){
        arr.push(i)
    }
}
for(let i = input[0] ; i <= input[1] ; i++){
    sum += arr[i-1]
}
console.log(sum)