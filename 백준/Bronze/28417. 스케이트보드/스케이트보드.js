const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let max = 0

for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ').map(Number)
    const twoPoint = Math.max(arr[0], arr[1])
    const anotherArr = [arr[2], arr[3], arr[4], arr[5], arr[6]].sort((a,b) => a - b)
    const anotherPoint = anotherArr[3] + anotherArr[4]
    max = Math.max(max, twoPoint + anotherPoint)
}

console.log(max)