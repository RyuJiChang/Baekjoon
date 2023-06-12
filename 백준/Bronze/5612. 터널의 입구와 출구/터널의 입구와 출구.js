const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let max = input[1][0]
let now = input[1][0]

for(let i = 2 ; i < input.length ; i++){
    const [add, minus] = input[i]
    now += add - minus
    if(now < 0){
        max = 0
        break
    }
    max = Math.max(max, now)
}

console.log(max)