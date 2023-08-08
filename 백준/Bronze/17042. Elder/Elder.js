const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let now = input[0]
let count = 1
const winners = {}
winners[now] = 1

for(let i = 2 ; i < input.length ; i++){
    const [winner, loser] = input[i].split(' ')
    if(loser === now){
        now = winner
        if(winners[winner] != 1){
            count++
        }
        winners[winner] = 1
    }
}

console.log(now)
console.log(count)