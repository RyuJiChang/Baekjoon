const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let count = 0
let now = 1

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'L'){
        now = Math.max(1, now - 1)
    }
    else{
        now = Math.min(3, now + 1)
    }
    
    if(now == 3){
        count++
    }
}

console.log(count)