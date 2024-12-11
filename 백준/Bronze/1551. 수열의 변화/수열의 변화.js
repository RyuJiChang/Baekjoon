const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, times] = input[0].split(' ').map(Number)
let result = input[1].split(',').map(Number)

for(let i = 0 ; i < times ; i++){
    const tempResult = []
    for(let j = 0 ; j < result.length - 1 ; j++){
        tempResult.push(result[j + 1] - result[j])
    }
    result = tempResult
}

console.log(result.join(','))