const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const coefficient = 31
const mod = 1234567891
let result = 0

const factorial = (num) => {
    let multiplied = 1
    for(let i = 1 ; i <= num ; i++){
        multiplied = (multiplied * coefficient) % mod
    }
    return multiplied
}

for(let i = 0 ; i < input[1].length ; i++){
    result = (result + (input[1][i].charCodeAt()-96) * factorial(i)) % mod
}

console.log(result)