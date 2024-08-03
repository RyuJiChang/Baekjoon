const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i+=9){
    let sum = 0
    for(let j = i ; j < i + 9 ; j++){
        const [a, b] = input[j].split(' ').map(Number)
        sum += a - b
    }
    if(sum > 0){
        result.push('Yonsei')
    }
    else if(sum < 0){
        result.push('Korea')
    }
    else{
        result.push('Draw')
    }
}

console.log(result.join('\n'))