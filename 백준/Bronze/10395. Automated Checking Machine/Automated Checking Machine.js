const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let count = 0
for(let i = 0 ; i < 5 ; i++){
    if(input[0][i] + input[1][i] == 1){
        count++
    }
}

console.log(count == 5 ? 'Y' : 'N')