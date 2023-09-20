const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let count = 0
for(let i = 0 ; i < input.length ; i++){
    count += Math.min(input[i], 7)
    if(i % 2){
        count -= 3 
    }
    else{
        count -= 2 
    }
}

console.log(count)