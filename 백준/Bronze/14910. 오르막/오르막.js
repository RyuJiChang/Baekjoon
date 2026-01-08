const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let result = 'Good'

for(let i = 1 ; i < input.length ; i++){
    if(input[i] < input[i-1]){
        result = 'Bad'
        break
    }
}

console.log(result)