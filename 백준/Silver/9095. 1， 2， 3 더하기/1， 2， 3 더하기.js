const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number)
let arr = [1,1,2,4,7,13,24,44,81,149,274]
for(let i = 1 ; i <= input[0] ; i++){
    console.log(arr[input[i]])
}