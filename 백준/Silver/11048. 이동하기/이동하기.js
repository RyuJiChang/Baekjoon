const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let arr = input.slice(1)

for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i].split(' ').map(Number)
}
let [a,b] = input[0].split(' ').map(Number)
arr.unshift(new Array(b).fill(0))
for(let i = 0 ; i <= a ; i++){
    arr[i].unshift(0)
}

for(let i = 1 ; i <= a ; i++){
    for(let j = 1 ; j <= b ; j++){
        arr[i][j] = arr[i][j] + Math.max(arr[i-1][j],arr[i-1][j-1],arr[i][j-1])
    }
}

console.log(arr[a][b])