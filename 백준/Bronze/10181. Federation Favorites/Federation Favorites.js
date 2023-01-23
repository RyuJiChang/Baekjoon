const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let result = []

for(let i = 0 ; i < input.length -1 ; i++){
    let targetNum = input[i]
    let factoring = []
    let sum = 0
    for(let j = 1 ; j < targetNum ; j++){
        if(targetNum % j === 0){
            sum += j
            factoring.push(j)
        }
    }
    
    if(sum === targetNum){
        result.push(`${targetNum} = ${factoring.join(' + ')}`)
    }
    else{
        result.push(`${targetNum} is NOT perfect.`)
    }
}

console.log(result.join('\n'))