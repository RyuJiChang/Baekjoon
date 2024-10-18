const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let sum = 0
let index = 0

while(sum + (index*2 + 1)**2 <= input){
    sum += (index*2 + 1)**2
    index++
}

console.log(index)