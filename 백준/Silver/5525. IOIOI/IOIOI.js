const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const str = input[2]
let count = 0
let target = `I${"OI".repeat(Number(input[0]))}`

for(let i = 0 ; i < str.length ; i++){
    if(str.slice(i,i+target.length) === target){
        count++
    }
}

console.log(count)
