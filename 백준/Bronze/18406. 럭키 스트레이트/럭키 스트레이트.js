const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('')
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    if(i < input.length / 2){
        sum += Number(input[i])
    }
    else{
        sum -= Number(input[i])
    }
}

console.log(sum == 0 ? 'LUCKY' : 'READY')