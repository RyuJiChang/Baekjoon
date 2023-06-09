const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const [tests, x, y] = input[0].split(' ').map(Number)
const lengthPow = x**2 + y**2
const result = []
for(let i = 1 ; i < input.length ; i++){
    if(Number(input[i])**2 <= lengthPow){
        result.push('YES')
    }
    else{
        result.push('NO')
    }
}

console.log(result.join('\n'))