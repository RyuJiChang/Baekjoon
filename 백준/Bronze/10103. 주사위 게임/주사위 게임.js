let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let chang = 100
let sang = 100

for(let i = 1 ; i < input.length ; i++){
    let [changScore, sangScore] = input[i].split(' ').map(Number)
    if(changScore > sangScore){
        sang -= changScore
    }
    else if(sangScore > changScore){
        chang -= sangScore
    }
}
console.log(chang)
console.log(sang)