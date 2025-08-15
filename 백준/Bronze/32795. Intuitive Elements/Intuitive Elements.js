const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i+=2){
    let str = 'YES'
    for(let j = 0 ; j < input[i+1].length ; j++){
        if(input[i].indexOf(input[i+1][j]) == -1){
            str = 'NO'
            break
        }
    }
    console.log(str)
}