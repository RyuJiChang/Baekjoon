let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i+=2){
    let [candyTypes, eachNeedAmount] = input[i].split(' ').map(Number)
    let candyArr = input[i+1].split(' ').map(Number)
    let peopleCount = 0
    for(let j = 0 ; j < candyArr.length ; j++){
        peopleCount += Math.floor(candyArr[j]/eachNeedAmount)
    }
    result.push(peopleCount)
}

console.log(result.join('\n'))