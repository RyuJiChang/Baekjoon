const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let a = 0
let b = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'A'){
        a++
    }
    else{
        b++
    }
}

console.log(`${a} : ${b}`)