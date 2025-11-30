const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    const check = []
    for(let j = 0 ; j < input[i].length ; j++){
        check[input[i][j]] = 1
    }
    console.log(check.filter(el => el ==1).length)
}