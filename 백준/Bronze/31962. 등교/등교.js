const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x,y] = input[0]
let result = -1
for(let i = 1 ; i < input.length ; i++){
    const sum = input[i][0] + input[i][1]
    if(sum <= y){
        result = Math.max(result, input[i][0])
    }
}

console.log(result)