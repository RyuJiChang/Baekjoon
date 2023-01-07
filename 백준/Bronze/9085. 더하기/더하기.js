let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i+=2){
    let sumArr = input[i+1].split(' ').map(Number)
    let sum = 0
    for(let j = 0 ; j < sumArr.length ; j++){
        sum += sumArr[j]
    }
    result.push(sum)
}

console.log(result.join('\n'))