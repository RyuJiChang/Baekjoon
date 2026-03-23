const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
for(let i = 1 ; i < input.length ; i++){
    if(input[i][1] == '2026'){
        console.log(input[i][0])
    }
}