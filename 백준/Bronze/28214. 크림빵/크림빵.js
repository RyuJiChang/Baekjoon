const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const breadLength = input[0][1]
const limit = input[0][2]
let sellable = 0
for(let i = 0 ; i < input[1].length ; i+=breadLength){
    let count = 0
    for(let j = i ; j < i + breadLength ; j++){
        if(input[1][j]){
            count++
        }
    }
    if(count >= limit){
        sellable++
    }
}

console.log(sellable)
