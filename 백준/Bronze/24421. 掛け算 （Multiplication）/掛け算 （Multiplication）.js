const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
let count = 0

for(let i = 0 ; i < input.length - 2 ; i++){
    for(let j = i + 1 ; j < input.length - 1 ; j++){
        for(let k = j + 1 ; k < input.length ; k++){
            if((input[i] * input[j]) == input[k]){
                count++
            }
        }
    }
}

console.log(count)