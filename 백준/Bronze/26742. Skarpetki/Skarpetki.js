const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let c = 0
let b = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'C'){
        c++
    }
    else{
        b++
    }
}

console.log(Math.floor(b/2) + Math.floor(c/2))