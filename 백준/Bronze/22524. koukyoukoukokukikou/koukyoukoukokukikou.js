const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const left = 'qwertasdfgzxcvb'

for(let i = 0 ; i < input.length - 1 ; i++){
    let count = 0
    let check = left.indexOf(input[i][0]) == -1 ? true : false
    for(let j = 0 ; j < input[i].length ; j++){
        let checkNow = left.indexOf(input[i][j]) == -1 ? true : false
        if(check != checkNow){
            check = checkNow
            count++
        }
    }
    console.log(count)
}