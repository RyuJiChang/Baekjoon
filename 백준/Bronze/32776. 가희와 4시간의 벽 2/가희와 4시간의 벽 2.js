const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let result = 'high speed rail'

if(input[0][0] > 240){
    let sum = input[1][0] + input[1][1] + input[1][2]
    if(sum < input[0][0]){
        result = 'flight'
    }
}

console.log(result)