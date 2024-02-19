const [n, m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let count = 1

const result = []

for(let i = 0 ; i < n ; i++){
    const arr = []
    for(let j = 0 ; j < m ; j++){
        arr.push(count++)
    }
    result.push(arr.join(' '))
}

console.log(result.join('\n'))