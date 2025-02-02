const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let index1 = 0
let index2 = 0
const result = []

while(index1 < input[0][0] || index2 < input[0][1]){
    if(input[1][index1] < input[2][index2]){
        result.push(input[1][index1])
        index1++
    }
    else if(input[1][index1] > input[2][index2]){
        result.push(input[2][index2])
        index2++
    }
    else if(index1 < input[0][0]){
        result.push(input[1][index1])
        index1++
    }
    else{
        result.push(input[2][index2])
        index2++
    }
}

console.log(result.join(' '))