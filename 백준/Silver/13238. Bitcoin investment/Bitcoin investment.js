const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let now = input[0]
let max = Math.max(Math.max(...input.slice(1)) - now, 0)

for(let i = 1 ; i < input.length ; i++){
    if(input[i] < now){
        now = input[i]
        max = Math.max(Math.max(...input.slice(i)) - now, max)
    }
}


console.log(max)
