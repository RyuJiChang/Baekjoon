const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let result = 1

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 'A' && result == 1){
        result = 2
    }
    else if(input[i] == 'A' && result == 2){
        result = 1
    }
    else if(input[i] == 'B' && result == 2){
        result = 3
    }
    else if(input[i] == 'B' && result == 3){
        result = 2
    }
    else if(input[i] == 'C' && result == 1){
        result = 3
    }
    else if(input[i] == 'C' && result == 3){
        result = 1
    }
}

console.log(result)