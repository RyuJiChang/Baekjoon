let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let now = 0
let sum = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i]){
        now++
        sum += now
    }
    else{
        now = 0
    }
}
console.log(sum)