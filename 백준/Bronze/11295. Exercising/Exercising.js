const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []
let count = 1
for(let i = 0 ; i < input.length-1 ; i++){
    const userData = []
    userData.push(`User ${count++}`)
    for(let j = i + 2 ; j < i + 2 + input[i+1] ; j++){
        userData.push((input[i]*input[j]/100000).toFixed(5))
    }
    result.push(userData.join('\n'))
    i += input[i+1]+1
}
console.log(result.join('\n'))