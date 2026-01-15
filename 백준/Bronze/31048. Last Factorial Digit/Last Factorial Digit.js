const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = [0,1,2,6,4,0,0,0,0,0,0,0,0,0,0,0]

for(let i = 1 ; i < input.length ; i++){
    console.log(arr[input[i]])
}