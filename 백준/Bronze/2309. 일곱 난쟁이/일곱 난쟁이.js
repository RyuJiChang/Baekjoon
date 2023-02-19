const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).sort((a,b) => a-b)

let sum = 0
const result = []
for(let i = 0 ; i < input.length ; i++){
    sum += input[i]
}

outer:for(let i = 0 ; i < input.length ; i++){
    for(let j = i+1 ; j < input.length ; j++){
        if(sum - input[i] - input[j] === 100){
            for(let k = 0 ; k < input.length ; k++){
                if(k !== i && k !== j){
                    result.push(input[k])
                }
            }
            break outer
        }
    }
}

console.log(result.join('\n'))