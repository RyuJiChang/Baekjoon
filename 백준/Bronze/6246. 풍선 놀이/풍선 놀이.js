const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const arr = new Array(input[0][0]).fill(0)

for(let i = 1 ; i < input.length ; i++){
    for(let j = input[i][0] - 1 ; j < arr.length ; j += input[i][1]){
        arr[j] = 1
    }
}

console.log(arr.filter(el => el == 0).length)