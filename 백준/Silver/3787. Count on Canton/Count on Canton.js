const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []

for(let i = 0 ; i < input.length ; i++){
    let left = input[i]
    let count = 2
    for(let j = 1 ; j < left ; j++){
        left -= j
        count++
    }
    if(count % 2){
        result.push(`TERM ${input[i]} IS ${left}/${count - left}`)
    }
    else{
        result.push(`TERM ${input[i]} IS ${count - left}/${left}`)
    }
}
console.log(result.join('\n'))