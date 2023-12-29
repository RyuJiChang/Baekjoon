const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let gold = '+'
let count = 0

for(let i = 1 ; i < input.length ; i+=2){
    if(input[i]*5 - input[i+1]*3 > 40){
        count++
    }
    else{
        gold = ''
    }
}

console.log(count + gold)