const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 1 ; i < input.length ; i++){
    let nums = Number(input[i])
    let sum = 0
    for(let j = i+1 ; j <= i + nums ; j++){
        const [x,y,z] = input[j].split(' ').map(Number)
        sum += y * z
    }
    result.push(`$${sum.toFixed(2)}`)
    i += nums
}

console.log(result.join('\n'))