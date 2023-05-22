const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = []

for(let i = 2 ; i < input.length ; i+=2){
    let min = 1000000
    let max = -1000000
    for(let j = 0 ; j < input[i].length ; j++){
        min = Math.min(min, input[i][j])
        max = Math.max(max, input[i][j])
    }
    result.push(min + ' ' + max)
}

console.log(result.join('\n'))