let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let sum = [0]
let arr = input[1].split(' ').map(Number)
let result = []
for(let i = 0 ; i < arr.length ; i++){
    sum[i+1] = sum[i]+arr[i]
}
for(let i = 3 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(sum[b]-sum[a-1])
}

console.log(result.join('\n'))