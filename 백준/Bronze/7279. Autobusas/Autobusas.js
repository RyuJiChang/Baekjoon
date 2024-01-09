const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let max = 0
let now = 0
for(let i = 1 ; i < input.length ; i++){
    const [add, minus] = input[i]
    now = now + add - minus
    if(now > max){
        max = now
    }
}

console.log(Math.max(0, max - input[0][1]))