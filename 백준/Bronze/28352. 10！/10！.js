const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = 6

for(let i = 11 ; i <= input ; i++){
    result *= i
}

console.log(result)