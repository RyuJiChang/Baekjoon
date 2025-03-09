const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number)).map((el, index) => [index, ...el, el[0] / el[1]])
input.shift()
input.sort((a,b) => b[3] - a[3])
let sum = 0

for(let i = 0 ; i < 3 ; i++){
    sum += input[i][2]
}

console.log(sum)
for(let i = 0 ; i < 3 ; i++){
    console.log(input[i][0])
}