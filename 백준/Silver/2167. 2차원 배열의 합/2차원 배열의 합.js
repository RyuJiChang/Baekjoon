const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const result = []

for(let i = input[0][0] + 2 ; i < input.length ; i++){
    const [x1, y1, x2, y2] = input[i]
    let sum = 0

    for(let j = x1 ; j <= x2 ; j++){
        for(let k = y1 - 1 ; k < y2 ; k++){
            sum += input[j][k]
        }
    }
    result.push(sum)
}


console.log(result.join('\n'))