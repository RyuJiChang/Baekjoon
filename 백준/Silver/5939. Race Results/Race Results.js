const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [h, m , s] = input[i].split(' ').map(Number)
    result.push([input[i], h * 3600 + m * 60 + s])
}

console.log(result.sort((a,b) => a[1] - b[1]).map(el => el[0]).join('\n'))