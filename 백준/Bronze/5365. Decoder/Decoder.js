const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ')

let result = input[0][0]
let beforeIndex = input[0].length

for(let i = 1 ; i < input.length ; i++){
    if(input[i].length >= beforeIndex){
        result += input[i][beforeIndex-1]
    }
    else{
        result += ' '
    }
    beforeIndex = input[i].length
}

console.log(result)