const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const checker = {}
const cardStr = ['B', 'K', 'V', 'S']

for(let i = 0 ; i < input.length ; i++){
    checker[input[i]] = true
}

for(let i = 1 ; i <= 13 ; i++){
    for(let j = 0 ; j < cardStr.length ; j++){
        let card = cardStr[j] + ' ' + i
        if(!checker[card]){
            console.log(card)
            break
        }
    }
}