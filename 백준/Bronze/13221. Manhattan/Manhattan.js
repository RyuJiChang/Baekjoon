const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x, y] = input[0]
let min = 201
let now = ''
for(let i = 2 ; i < input.length ; i++){
    let distance = Math.abs(input[i][0] - x) + Math.abs(input[i][1] - y)
    if(distance < min){
        min = distance
        now = input[i].join(' ')
    }
}

console.log(now)