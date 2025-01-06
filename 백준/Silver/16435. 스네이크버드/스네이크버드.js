const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
let [listLength, snake] = input[0]
const fruit = input[1].sort((a,b) => a-b)

for(let i = 0  ; i < fruit.length ; i++){
    if(snake >= fruit[i]){
        snake++
    }
    else{
        break
    }
}

console.log(snake)