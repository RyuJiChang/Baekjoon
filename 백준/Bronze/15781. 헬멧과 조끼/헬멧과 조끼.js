const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

let armor = 0
let helmet = 0

for(let i = 0 ; i < input[1].length ; i++){
    if(armor < input[1][i]){
        armor = input[1][i]
    }
}

for(let i = 0 ; i < input[2].length ; i++){
    if(helmet < input[2][i]){
        helmet = input[2][i]
    }
}armor+helmet
console.log(armor+helmet)