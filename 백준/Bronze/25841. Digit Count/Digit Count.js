const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const target = String(input[2])
let str = ''
let count = 0

for(let i = input[0] ; i <= input[1] ; i++){
    str += i
}

for(let i = 0 ; i < str.length ; i++){
    if(str[i] === target){
        count++
    }
}

console.log(count)