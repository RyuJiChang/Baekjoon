const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const results = []

for(let i = 1 ; i < input.length ; i++){
    let numArr = input[i].split('').map(Number)
    let key = numArr.slice(numArr.length-3).join('') * 10
    let addNum = 0
    numArr.forEach(el => addNum += el)

    result = ((key + addNum) > 999 ? key + addNum : 1000 + key + addNum) % 10000
    results.push(String(result).padStart(4, "0"))
}

console.log(results.join('\n'))