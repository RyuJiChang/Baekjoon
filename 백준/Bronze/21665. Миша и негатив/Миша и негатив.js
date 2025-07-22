const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [x, y] = input[0].split(' ').map(Number)
const arr1 = input.slice(1,1+x)
const arr2 = input.slice(2+x)

let count = 0

for(let i = 0 ; i < x ; i++){
    for (let j = 0 ; j < y ; j++){
        if(arr1[i][j] == arr2[i][j]){
            count++
        }
    }
}

console.log(count)