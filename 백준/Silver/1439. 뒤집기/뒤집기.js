const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let change = 0
let now = input[0]

for(let i = 1 ; i < input.length ; i++){
    if(input[i] != now){
        now = input[i]
        change++
    }
}

console.log(Math.round(change / 2))