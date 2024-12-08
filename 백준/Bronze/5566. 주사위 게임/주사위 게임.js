const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [mapNum, diceNum] = input.shift().split(' ').map(Number)
const map = input.slice(0,mapNum).map(Number)
const dice = input.slice(mapNum).map(Number)
let now = 0
let count = 0

while(now < mapNum - 1){
    now = now + dice[count]
    count++
    if(map[now] != 0){
        now = now + map[now]
    }
}

console.log(count)