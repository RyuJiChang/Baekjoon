let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = Number(input[0])
for(let i = 1 ; i < input.length ; i+=2){
    if(input[i] === '+'){
        result += Number(input[i+1])
    }
    else if(input[i] === '-'){
        result -= Number(input[i+1])
    }
    else if(input[i] === '/'){
        result = Math.floor(result/Number(input[i+1]))
    }
    else if(input[i] === '*'){
        result *= Number(input[i+1])
    }
}

console.log(result)