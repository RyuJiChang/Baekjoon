const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let now = ''
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(now != input[i]){
        count += 10
    }
    else{
        count += 5
    }
    now = input[i]
}

console.log(count)