const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let x = 0
let y = 0

for(let i = 1 ; i < input.length ; i++){
    if(Math.abs(x-y) == 2){
        break
    }
    if(input[i] == 'D'){
        x++
    }
    else{
        y++
    }
}
console.log(`${x}:${y}`)