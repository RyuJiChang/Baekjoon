const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 0 ; i < input.length -1 ; i++){
    const [have, minus] = input[i].split(' ').map(Number)
    const leftNum = have-minus
    if(leftNum < 2){
        result.push("0 0")
    }
    else if(leftNum%2){
        result.push(`${(leftNum-3)/2} 1`)
    }
    else{
        result.push(`${leftNum/2} 0`)
    }
}

console.log(result.join('\n'))