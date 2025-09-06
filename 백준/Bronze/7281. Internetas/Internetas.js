const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let max = 0
let now = 1

for(let i = 1 ; i < input.length ; i++){
    if(input[i][1]){
        max = Math.max(max, input[i][0] - now)
        now = input[i][0]
    }
}

console.log(max)