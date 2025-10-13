const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0
    
for(let i = 2 ; i < input.length ; i++){
    if(input[i][1] >= 2 && input[i][2] >= 17){
        result += input[0][input[i][0]]
    }
}

console.log(result)