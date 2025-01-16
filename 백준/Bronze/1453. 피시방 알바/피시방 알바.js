const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const arr = []
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(arr[input[i]]){
        count++
    }
    else{
        arr[input[i]] = true
    }
}

console.log(count)