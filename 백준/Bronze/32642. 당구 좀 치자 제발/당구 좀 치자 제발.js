const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

let result = 0
let anger = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i]){
        anger++
    }
    else{
        anger--
    }
    result += anger
}

console.log(result)