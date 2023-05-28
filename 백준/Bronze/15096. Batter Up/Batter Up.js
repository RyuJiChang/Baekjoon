const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let count = 0
let point = 0

for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] !== -1){
        count++
        point += input[1][i]
    }
}


console.log(point/count)