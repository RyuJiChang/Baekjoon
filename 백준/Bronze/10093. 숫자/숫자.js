const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(BigInt)
const list = []
const a = input[0] > input[1] ? input[1] : input[0]
const b = input[0] > input[1] ? input[0] : input[1]

for(let i = a + 1n ; i < b ; i+=1n){
    list.push(String(i))
}

console.log(list.length)
console.log(list.join(' '))