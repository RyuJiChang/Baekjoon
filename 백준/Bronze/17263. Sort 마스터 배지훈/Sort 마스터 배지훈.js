const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let lastNum = 0

for(let i = 0 ; i < input[1].length ; i++){
    if(lastNum < input[1][i]){
        lastNum = input[1][i]
    }
}

console.log(lastNum)