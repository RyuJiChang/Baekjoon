const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []
let index = 0
for(let i = 1 ; i < input.length ; i++){
    index++
    const data = [`Case ${index}:`]
    for(let j = i + 1 ; j <= i + input[i] ; j++){
        if(input[j] < 6 ){
            data.push(input[j] + 1)
        }
    }
    i += input[i]
    result.push(data.join('\n'))
}

console.log(result.join('\n'))