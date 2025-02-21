const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]

let now = input[0]
let check = true
for(let i = 1 ; i < input.length ; i++){
    if(input[i] == now){
        check = false 
        break
    }
    else{
        now = input[i]
    }
}

console.log(check ? 'Yes' : 'No')