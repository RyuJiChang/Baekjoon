let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []
let coin = [25,10,5,1]
for(let i = 1 ; i < input.length ; i++){
    let arr = []
    let left = input[i]
    for(let j = 0 ; j < 4 ; j++){
        arr.push(Math.floor(left/coin[j]))
        left %= coin[j]
    }
    result.push(arr.join(' '))
}
console.log(result.join('\n'))