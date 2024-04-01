let input = BigInt(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0

for(let i = 1n ; i*i <= input ; i++){
    input -= i*i
    count++
}

console.log(count)