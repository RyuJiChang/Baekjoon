const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [m, n] = input.shift()
const arr = []
let sum = 0

for(let i = 0 ; i <= 100 ; i++){
    arr.push(new Array(101).fill(0))
}

for(let i = 0 ; i < m ; i++){
    const [x1, y1, x2, y2] = input[i]
    for(let j = x1 ; j <= x2 ; j++){
        for(let k = y1 ; k <= y2 ; k++){
            arr[j][k]++
        }
        
    }
}

for(let i = 1 ; i <= 100 ; i++){
    for(let j = 1 ; j <= 100 ; j++){
        if(arr[i][j] > n){
            sum++
        }
    }
}

console.log(sum)