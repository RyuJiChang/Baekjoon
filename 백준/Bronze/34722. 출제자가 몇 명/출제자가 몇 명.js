const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let count = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i][0] >= 1000 || input[i][1] >= 1600 || input[i][2] >= 1500 || input[i][3] > 0 && input[i][3] <= 30){
        count++
    }
}


console.log(count)