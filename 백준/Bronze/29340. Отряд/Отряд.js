const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = ''

for(let i = 0 ; i < input[0].length ; i++){
    if(Number(input[0][i]) > Number(input[1][i])){
        result += input[0][i]
    }
    else{
        result += input[1][i]
    }
}

console.log(result)