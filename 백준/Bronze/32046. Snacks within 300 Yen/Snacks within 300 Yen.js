const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

for(let i = 1 ; i < input.length ; i+=2){
    let sum = 0
    for(let j = 0 ; j < input[i].length ; j++){
        if(sum + input[i][j] <= 300){
            sum = sum + input[i][j]
        }
    }
    console.log(sum)
}