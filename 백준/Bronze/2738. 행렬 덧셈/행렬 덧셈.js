const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const [xLength, yLength] = input.shift()
const result = []
for(let i = 0 ; i < xLength ; i++){
    result.push(new Array(yLength).fill(0))
}

for(let i = 0 ; i < xLength ; i++){
    for(let j = 0 ; j < yLength ; j++){
        result[i][j] += input[i][j]
    }
}


for(let i = xLength ; i < xLength * 2 ; i++){
    for(let j = 0 ; j < yLength ; j++){
        result[i-xLength][j] += input[i][j]
    }
}

console.log(result.map(el => el.join(' ')).join('\n'))