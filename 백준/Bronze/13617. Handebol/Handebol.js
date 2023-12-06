const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let result = 0

for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ')
    let isWinner = true
    for(let j = 0 ; j < arr.length ; j++){
        if(arr[j] == '0'){
            isWinner = false
            break
        }
    }
    if(isWinner){
        result++
    }
}

console.log(result)