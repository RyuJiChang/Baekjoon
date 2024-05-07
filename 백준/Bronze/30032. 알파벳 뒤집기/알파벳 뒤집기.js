const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, d] = input.shift().split(' ').map(Number)
const result = []
const checker = {d1 : 'q', d2 : 'b', b1 : 'p', b2 : 'd', q1 : 'd', q2 : 'p', p1: 'b', p2 : 'q'}

for(let i = 0 ; i < n ; i++){
    let str = ''
    for(let j = 0 ; j < n ; j++){
        str += checker[input[i][j] + d]
    }
    result.push(str)
}

console.log(result.join('\n'))