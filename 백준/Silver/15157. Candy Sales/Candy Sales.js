const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let result = [input[0]]
let minimum = input[0]
for(let i = 1 ; i < input.length ; i++){
    if(input[i] < (minimum +1)){
        minimum = input[i]
        result.push(minimum)
    }
    else{
        minimum += 1
        result.push(minimum)
    }
}

console.log(result.join(' '))