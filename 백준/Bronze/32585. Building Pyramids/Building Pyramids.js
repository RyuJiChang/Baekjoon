const input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())
let sum = 0n

for(let i = 1n ; i <= input ; i++){
    sum += i * (i + 1n) / 2n
}

console.log(String(sum))