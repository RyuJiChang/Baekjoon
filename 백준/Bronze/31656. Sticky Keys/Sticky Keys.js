const input = require('fs').readFileSync('/dev/stdin').toString()
let result = input[0]
let now = input[0]
for(let i = 1 ; i < input.length ; i++){
    if(input[i] != now){
        result += input[i]
    }
    now = input[i]
}

console.log(result)