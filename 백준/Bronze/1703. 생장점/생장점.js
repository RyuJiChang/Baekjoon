const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 0 ; i < input.length-1 ; i++){
    const eachCase = input[i].split(' ').map(Number)
    let leafNumb = 1
    for(let j = 1 ; j < eachCase.length ; j += 2){
        leafNumb *= eachCase[j]
        leafNumb -= eachCase[j+1]
    }
    result.push(leafNumb)
}

console.log(result.join('\n'))