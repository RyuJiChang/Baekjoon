const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split('-').map(Number))
let count = 0

for(let i = 2 ; i < input.length ; i++){
    if(input[i][0] < input[0][0]){
        count++
    }
    else if((input[i][0] == input[0][0]) && (input[i][1] < input[0][1])){
        count++
    }
    else if((input[i][0] == input[0][0]) && (input[i][1] == input[0][1]) && (input[i][2] < input[0][2])){
        count++
    }
}
console.log(input[1][0] - count)