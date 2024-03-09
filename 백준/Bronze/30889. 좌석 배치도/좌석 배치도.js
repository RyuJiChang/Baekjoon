const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
for(let i = 0 ; i < 10 ; i++){
    result.push(new Array(20).fill('.'))
}

for(let i = 1 ; i < input.length ; i++){
    const x = input[i][0].charCodeAt() - 65
    const y = Number(input[i].slice(1)) - 1
    result[x][y] = 'o'
}

console.log(result.map(el => el.join('')).join('\n'))