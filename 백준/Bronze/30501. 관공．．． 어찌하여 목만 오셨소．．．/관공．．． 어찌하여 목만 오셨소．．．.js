const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
    if(input[i].indexOf('S') != -1){
        console.log(input[i])
        break
    }
}