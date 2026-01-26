const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let sum = Number(input[0])

for(let i = 2 ; i < input.length ; i+=2){
    if(input[i] == '+'){
        sum += Number(input[i+1])
    }
    else{
        sum -= input[i+1]
    }
}

console.log(sum)