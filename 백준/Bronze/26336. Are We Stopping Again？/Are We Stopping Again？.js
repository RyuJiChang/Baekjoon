const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [goal, x, y] = input[i].split(' ').map(Number)
    let count = 0
    
    for(let j = 1 ; j < goal ; j++){
        count += j % x == 0 || j % y == 0 ? 1 : 0
    }
    
    result.push(input[i])
    result.push(count)
}

console.log(result.join('\n'))