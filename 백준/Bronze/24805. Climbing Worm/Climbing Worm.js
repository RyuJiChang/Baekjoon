const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let count = 0
let now = 0
let target = input[2]

while(now < target){
    now += input[0]
    count++
    if(now >= target){
        break
    }
    now -= input[1]
}

console.log(count)