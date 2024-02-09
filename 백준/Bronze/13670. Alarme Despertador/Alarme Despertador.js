const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length - 1 ; i++){
    const [h1, m1, h2, m2] = input[i].split(' ').map(Number)
    const t1 = h1 * 60 + m1
    const t2 = h2 * 60 + m2
    const sleep = (t2 - t1) >= 0 ? t2 - t1 : 1440 - t1 + t2 
    result.push(sleep)
}

console.log(result.join('\n'))