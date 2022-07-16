const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n").map(Number)
let num = input.slice(1)
let arr = [0,1,1,1,2,2,3,4,5,7,9,12,16]
for(let i = 11 ; i < 101 ; i++){
    arr[i] = arr[i-2]+arr[i-3]
}

for(let i = 0 ; i < num.length ; i++){
    console.log(arr[num[i]])
}