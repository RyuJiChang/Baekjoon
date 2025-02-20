const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let min = Infinity

for(let i = 1 ; i < input.length ; i++){
    const [a, b] = input[i]

    if(a <= b){
        min = Math.min(min, b)
    }
}

console.log(min == Infinity ? -1 : min)