let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let before = new Array(input[1]+1).fill(0)
before[0] = 1
let after = []
let sum = 0

for(let i = 0 ; i < input[0] ; i++){
    for(let j = 0 ; j <= input[1] ; j++){
        if(j === 0 ){
         after[j] = (before[0] + before[input[1]])%5000011
        }
        else{
         after[j] = before[j-1]
            
        }  
    }
    before = [...after]
}

for(let i = 0 ; i <= input[1] ; i++){
    sum += after[i]
}
console.log(sum%5000011)