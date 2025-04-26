const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 0

for(let i = 2 ; i < input.length ; i++){
    if(input[1][i-2]){
        result += Math.max(0, input[i][1] - input[i][0])
    }
}

console.log(result)