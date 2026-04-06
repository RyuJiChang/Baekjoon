const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i].split(' ')
    if(b == 'IN'){
        sum += Number(c)
    }
    else{
        sum -= c
    }
}

console.log(sum == 0 ? 'NO STRAGGLERS' : sum)