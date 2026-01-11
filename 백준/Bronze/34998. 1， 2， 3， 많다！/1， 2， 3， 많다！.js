const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' + ').map(Number))

for(let i = 2 ; i < input.length ; i += 2){
    let result = 0
    for(let j = 0 ; j < input[i].length ; j++){
        result += input[i][j]
    }
    console.log(result < 10 ? result : '!')
}