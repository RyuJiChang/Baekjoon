const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const nums = Number(input[i])
    const map = {}
    for(let j = 1 ; j <= nums ; j++){
        map[input[i+j]] = true
    }
    result.push(Object.keys(map).length)
    i += nums
}

console.log(result.join('\n'))