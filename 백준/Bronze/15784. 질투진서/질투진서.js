const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [length, x, y] = input.shift()
let envy = 'HAPPY'

for(let i = 0 ; i < length ; i++){
    if(input[x-1][i] > input[x-1][y-1] || input[i][y-1] > input[x-1][y-1]){
        envy = 'ANGRY'
        break
    }
}

console.log(envy)