const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = []
input.shift()

for(let i = 0 ; i < input.length ; i++){
    for(let j = 0 ; j < input[i].length ; j++){
        if(input[i][j] != '.'){
            arr[j] = input[i][j]
        }
    }
}

console.log(arr.join(''))