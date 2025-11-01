const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [timeA, damageA] = input[0]
const [timeB, damageB] = input[1]
const [timeC, damageC] = input[2]
let hp = input[3][0]

let time = 0

while(hp > 0){
    if(time % timeA == 0){
        hp -= damageA
    }
    if(time % timeB == 0){
        hp -= damageB
    }
    if(time % timeC == 0){
        hp -= damageC
    }
    time++
}

console.log(time - 1)