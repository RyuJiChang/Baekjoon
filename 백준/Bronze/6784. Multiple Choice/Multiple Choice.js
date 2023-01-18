const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const amount = Number(input[0])
let count = 0
for(let i = 1 ; i < input.length-input[0] ; i++){
    if(input[i] === input[i+amount]){
        count++
    }
}

console.log(count)