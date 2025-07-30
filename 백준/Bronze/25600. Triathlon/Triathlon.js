const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let max = 0

for(let i = 1 ; i < input.length ; i++){
    const [a,d,g] = input[i]
    if(a == (d+g)){
        max = Math.max(a * (d+g) * 2, max)
    }
    else{
        max = Math.max(a * (d+g), max)
    }
}

console.log(max)