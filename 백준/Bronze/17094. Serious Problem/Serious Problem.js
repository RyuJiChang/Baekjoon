const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const total = Number(input[0])
let sumE = 0

for(let i = 0 ; i < input[1].length ; i++){
    if(input[1][i] === 'e'){
        sumE++
    }
}
sumE *= 2

if(sumE === total){
    console.log('yee')
}
else if(sumE < total){
    console.log(2)
}
else{
    console.log('e')
}