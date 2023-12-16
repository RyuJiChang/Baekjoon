const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [n, m] = input[0]
const arr = new Array(n+m).fill(0)

for(let i = 0 ; i < input[1].length ; i++){
    arr[i] = input[1][i]
}

for(let i = 2 ; i < input.length ; i++){
    for(let j = 0 ; j < n + m ; j++){
        arr[i-2] -= input[i][j]
        arr[j] += input[i][j]
    }
}

console.log(arr.join(' '))