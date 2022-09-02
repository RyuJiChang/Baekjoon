let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

for(let i = 0 ; i < input.length ; i++){
    input[i] = input[i].split(' ').map(Number)
}
let count = 1
input = input.sort((a,b) => a[0]-b[0])
input = input.sort((a,b) => a[1]-b[1])
let before = input[0][1]

for(let i = 1 ; i < input.length ; i++){
    if(input[i][0] >= before){
        count++
        before = input[i][1]
    }
}
console.log(count)