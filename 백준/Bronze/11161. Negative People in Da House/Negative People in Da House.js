const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const count = Number(input[i])
    let min = 0
    let now = 0
    for(let j = i+1 ; j <= i + count ; j++){
        const [x,y] = input[j].split(' ').map(Number)
        now = now + x - y
        min = Math.min(min, now)
    }
    result.push(-min)
    i += count
}

console.log(result.join('\n'))