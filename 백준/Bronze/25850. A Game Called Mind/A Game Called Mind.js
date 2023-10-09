const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const data = []

for(let i = 1 ; i < input.length ; i++){
    const now = String.fromCharCode(64 + i)
    for(let j = 1 ; j < input[i].length ; j++){
        data.push([input[i][j], now])
    }
}

data.sort((a, b) => a[0] - b[0])

console.log(data.map(el => el[1]).join(''))
