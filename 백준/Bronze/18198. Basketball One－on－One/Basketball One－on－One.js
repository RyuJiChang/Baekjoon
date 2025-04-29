const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let a = 0
let b = 0

for(let i = 0 ; i < input.length ; i+=2){
    if(input[i] == 'A'){
        a += Number(input[i+1])
    }
    else{
        b += Number(input[i+1])
    }
}

console.log(a > b ? 'A' : 'B')