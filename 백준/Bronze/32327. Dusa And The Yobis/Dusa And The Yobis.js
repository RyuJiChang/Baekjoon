const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let now = input[0]

for(let i = 1 ; i < input.length ; i++){
    if(now > input[i]){
        now += input[i]
    }
    else{
        break
    }
}

console.log(now)