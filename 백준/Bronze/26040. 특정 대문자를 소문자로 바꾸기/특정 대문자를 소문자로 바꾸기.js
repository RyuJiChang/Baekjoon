const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let str = input[0]
const arr = input[1].split(' ')
for(let i = 0 ; i < arr.length ; i++){
    str = str.split(arr[i]).join(arr[i].toLowerCase())
}

console.log(str)