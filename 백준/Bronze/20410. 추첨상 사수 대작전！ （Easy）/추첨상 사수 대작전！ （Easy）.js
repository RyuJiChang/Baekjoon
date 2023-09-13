const [m,seed, x1, x2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let result = ''
for(let i = 0 ; i < m ; i++){
    for(let j = 0 ; j < m ; j++){
        const calX1 = (seed * i + j) % m
        const calX2 = (x1 * i + j) % m
        if(calX1 === x1 && calX2 === x2){
            result = `${i} ${j}`
        }
    }
}

console.log(result)