const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const count = [0, 0, 0, 0, 0]
const result = []
for(let i = 1 ; i < input.length ; i++){
    for(let j = 0 ; j < 5 ; j++){
        if(input[i][j] == 'Y'){
            count[j]++
        }
    }
}

const max = Math.max(...count)

for(let i = 0 ; i < 5 ; i++){
    if(count[i] == max){
        result.push(i+1)
    }
}

console.log(result.join(','))