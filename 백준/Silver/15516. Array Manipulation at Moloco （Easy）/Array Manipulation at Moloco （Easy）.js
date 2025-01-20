const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
input.shift()
const result = []

for(let i = 0 ; i < input.length ; i++){
    let count = 0
    for(let j = 0 ; j < i ; j++){
        if(input[j] < input[i]){
            count++
        }
    }
    result.push(count)
}

console.log(result.join('\n'))