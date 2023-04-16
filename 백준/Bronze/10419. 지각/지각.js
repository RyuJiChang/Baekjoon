const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

const result = []

for(let i = 1 ; i < input.length ; i++){
    let num = 0
    for(let j = 0 ; j**2 <= input[i] ; j++){
        if(j**2 + j <= input[i]){
            num = j
        }
        else{
            break
        }
    }
    result.push(num)
}

console.log(result.join('\n'))