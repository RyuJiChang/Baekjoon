const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let str = ''
let now
for(let i = 0 ; i < input.length ; i++){
    if(now != input[i]){
        str += input[i]
    }
    now = input[i]
}

console.log(str)