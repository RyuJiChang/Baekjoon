const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []
let count = 1

for(let i = 2 ; i < input.length ; i++){
    const xArr = input[i].split(' ').map(Number).sort((a,b) => a-b)
    const yArr = input[i+1].split(' ').map(Number).sort((a,b) => b-a)
    let sum = 0
    for(let j = 0 ; j < xArr.length ; j++){
        sum += xArr[j] * yArr[j]
    }
    result.push(`Case #${count++}: ${sum}`)
    i+=2
}

console.log(result.join('\n'))