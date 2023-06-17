const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []
let now = input[1]

for(let i = 2 ; i < input.length ; i++){
    if(input[i] % now === 0){
        result.push(input[i])
        now = input[i+1]
        i++
    }
}
console.log(result.join('\n'))