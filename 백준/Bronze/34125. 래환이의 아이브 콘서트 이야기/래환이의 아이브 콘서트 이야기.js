const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x,y] = input.shift()

let min  = Infinity
let result = -1

for(let i = 0 ; i < x ; i++){
    for(let j = 0 ; j < y ; j++){
        if(!input[i][j]){
            min = Math.min(min, (i+1) + Math.abs((y+1)/2 - (j+1)))
        }
    }
}

for(let i = 0 ; i < x ; i++){
    for(let j = 0 ; j < y ; j++){
        if(!input[i][j] && ((i+1) + Math.abs((y+1)/2 - (j+1))) == min){
            result = `${i+1} ${j+1}`
        }
    }
}

console.log(result)