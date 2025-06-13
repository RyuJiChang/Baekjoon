const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let count = 0
for(let i = 0 ; i < input[0][0] ; i++){
    if(input[0][1] >= input[1][i]){
        count++
    }
}

console.log(count)