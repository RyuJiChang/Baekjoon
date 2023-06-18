const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let result = input[0]
let now = input[0]

for(let i = 1 ; i < input.length ; i++){
    if(input[i] > now + 1){
        result += input[i]
    }
    now = input[i]
}

console.log(result)