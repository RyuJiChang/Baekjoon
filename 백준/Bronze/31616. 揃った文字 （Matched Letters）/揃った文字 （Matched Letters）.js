const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = 'Yes'

for(let i = 1 ; i < input[1].length ; i++){
    if(input[1][i] != input[1][0]){
        result = 'No'
        break
    }
}

console.log(result)