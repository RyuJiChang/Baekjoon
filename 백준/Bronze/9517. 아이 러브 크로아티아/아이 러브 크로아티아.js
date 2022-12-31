let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let now = Number(input[0])
let timeSum = 0
for(let i = 2 ; i < input.length ; i++){
    let [timeStr, answerTNP] = input[i].split(' ')
    let time = Number(timeStr)
    timeSum += time
    if(timeSum > 210){
        break
    }
    if(answerTNP === 'T'){
        now++
    }
}
console.log((now-1)%8 +1)