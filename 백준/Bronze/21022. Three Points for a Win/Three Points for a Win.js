const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let result = 0
for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] === input[2][i]){
        result += 1
    }
    else if(input[1][i] > input[2][i]){
        result += 3
    }
}

console.log(result)