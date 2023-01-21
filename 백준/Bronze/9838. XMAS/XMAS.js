const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let arr = [0]
for(let i = 1 ; i < input.length ; i++){
    arr[input[i]] = i
}

console.log(arr.slice(1).join('\n'))