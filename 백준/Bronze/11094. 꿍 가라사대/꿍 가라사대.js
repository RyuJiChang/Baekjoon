const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split('Simon says'))

for(let i = 1 ; i < input.length ; i++){
    if(input[i][1]){
        console.log(input[i][1])
    }
}