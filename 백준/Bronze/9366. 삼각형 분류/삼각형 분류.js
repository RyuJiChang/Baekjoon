const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a,b,c] = input[i].split(' ').map(Number).sort((a,b) => a-b)
    if(a === b & b === c){
        result.push(`Case #${i}: equilateral`)
    }
    else if(a + b <= c){
        result.push(`Case #${i}: invalid!`)
    }
    else if(a === b || b === c){
        result.push(`Case #${i}: isosceles`)
    }
    else{
        result.push(`Case #${i}: scalene`)
    }
}

console.log(result.join('\n'))