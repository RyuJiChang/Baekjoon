const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const result = []

for(let i = 1 ; i <= Math.min(...input) ; i++){
    if(input[0] % i == 0 && input[1] % i == 0){
        result.push(`${i} ${input[0] / i} ${input[1] / i}`)
    }
}

console.log(result.join('\n'))