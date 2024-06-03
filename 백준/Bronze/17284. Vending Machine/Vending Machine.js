const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let left = 5000

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == 1 && left >= 500){
        left -= 500
    }
    else if(input[i] == 2 && left >= 800){
        left -= 800
    }
    else if(input[i] == 3 && left >= 1000){
        left -= 1000
    }
}

console.log(left)