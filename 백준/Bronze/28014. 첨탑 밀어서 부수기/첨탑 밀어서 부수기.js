const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let now = input[0]
let count = 1

for(let i = 1 ; i < input.length ; i++){
    if(input[i] >= now){
        count++
    }
        now = input[i]
}

console.log(count)