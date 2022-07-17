const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let arr = input[1].split(' ').map(Number)
let arrs = input.slice(2)
let resultArr = [0]
let a,b
let result = []
for(let i = 1 ; i <= arr.length ; i++){
    resultArr[i] = resultArr[i-1]+arr[i-1]
}
for(let i = 0 ; i < arrs.length ; i++){
    [a,b] =arrs[i].split(' ').map(Number)
    result.push(resultArr[b]-resultArr[a-1])
}
console.log(result.join('\n'))