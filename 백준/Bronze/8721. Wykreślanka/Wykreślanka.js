const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let count = 0
let now = 1

for(let i = 0 ; i < input.length ; i++){
    if(now === input[i]){
        now++
    }
    else{
        count++
    }
}

console.log(count)