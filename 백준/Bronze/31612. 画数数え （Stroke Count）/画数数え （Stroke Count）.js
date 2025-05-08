const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'j' || input[i] == 'i'){
        count += 2
    }
    else{
        count++
    }
}

console.log(count)