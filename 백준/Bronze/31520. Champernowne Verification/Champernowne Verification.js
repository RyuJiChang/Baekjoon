const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map(Number)

let result = -1

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == i+1){
        result = i+1
    }
    else{
        result = -1
        break
    }
}

console.log(result)