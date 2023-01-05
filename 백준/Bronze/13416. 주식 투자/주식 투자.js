let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let testCaseAmount = Number(input[i])
    let sum = 0
    for(let j = i+1 ; j <= i+testCaseAmount ; j++){
        let [a,b,c] = input[j].split(' ').map(Number)
        sum += Math.max(0,a,b,c)
    }
    result.push(sum)
    i += testCaseAmount
}

console.log(result.join('\n'))