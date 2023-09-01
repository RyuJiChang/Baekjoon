const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []

for(let i = 1 ; i < input.length ; i++){
    let count = 0
    for(let j = 1 ; j <= input[i] ; j++){
        if(input[i] % j === 0){
            count++
        }
    }
    result.push(`${input[i]} ${count}`)
}

console.log(result.join('\n'))