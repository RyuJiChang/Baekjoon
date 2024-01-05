const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const check = input.shift()
const arr = input[0].split(' ')
let result = 0
for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == check){
        result++
    }
}
console.log(result)