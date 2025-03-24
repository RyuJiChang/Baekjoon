const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ')[0]).map(Number)
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i] == 136){
        sum += 1000
    }
    else if(input[i] == 142){
        sum += 5000
    }
    else if(input[i] == 148){
        sum += 10000
    }
    else if(input[i] == 154){
        sum += 50000
    }
}

console.log(sum)