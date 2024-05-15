const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let before = 1n
const result = []

for(let i = 1 ; i < input.length ; i++){
    const [a, x, b] = input[i].split(' ')
    if(x == '*'){
        let resultB = BigInt(a) * BigInt(b) * BigInt(a) * BigInt(b)
        before = resultB
        result.push(resultB)
    }
    else if(x == '/'){
        let resultB = (BigInt(a) + 1n)/ 2n
        before = resultB
        result.push(resultB)
    }
    else if(x == '+'){
        let resultB = BigInt(a) + BigInt(b) -  before
        before = resultB
        result.push(resultB)
    }
    else if(x == '-'){
        let resultB = (BigInt(a) - BigInt(b)) * before
        before = resultB
        result.push(resultB)
    }
}

console.log(result.join('\n'))