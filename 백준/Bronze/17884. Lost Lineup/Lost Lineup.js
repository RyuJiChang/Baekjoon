const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = [1]

if(input[1] != null){
    for(let i = 0 ; i < input[1].length ; i++){
        result[input[1][i]+1] = i+2
    }
}
console.log(result.join(' '))