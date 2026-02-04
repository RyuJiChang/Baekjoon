const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let count = 0
let bonus = 0
for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'O'){
        count += i + 1 + bonus
        bonus++
    }
    else{
        bonus = 0
    }
}
console.log(count)