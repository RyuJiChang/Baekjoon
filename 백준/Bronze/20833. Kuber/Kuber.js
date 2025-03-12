const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let sum = 0
for(let i = 1 ; i <= input ; i++){
    sum += i**3
}

console.log(sum)