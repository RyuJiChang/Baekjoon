const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let left = 0
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] === '1'){
        count++
        left = 2
    }
    else if(left){
        count++
        left--
    }
}

console.log(count)