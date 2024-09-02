const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let sum = 0
let powpowSum = 0
for(let i = 1 ; i <= input ; i++){
    sum += i
    powpowSum += i**3
}

console.log(sum)
console.log(sum**2)
console.log(powpowSum)