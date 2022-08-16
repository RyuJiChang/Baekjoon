const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    result.push(calculate(a,b))
}

function calculate(a,b){
    function factorial(num) {
        let result = BigInt(1)
        for(let i = num ; i > 1 ; i--){
            result *= BigInt(i)
        }
        return result
        }
    return String(factorial(b)/factorial(a)/factorial(b-a))
}

console.log(result.join('\n'))