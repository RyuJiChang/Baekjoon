const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0
let size = Number(input[0].split(' ')[0])

for(let i = 1 ; i < input.length ; i++){
    if(input[i] == 1){
        count++
    }
    else{
        count--
    }
    if(count > size){
        size *= 2
    }
}

console.log(size)