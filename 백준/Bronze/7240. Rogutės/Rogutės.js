const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const speed = Number(input[0].split(' ')[1])
let now = 0

for(let i = 1 ; i < input.length ; i++){
    if(now > speed){
        now--
    }
    now += Number(input[i])
}

console.log(now)