const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = []
let [aAmount, bAmount, cAmount] = [0, 0, 0]

for(let i = 1 ; i < input.length ; i++){
    let [a, b, c] = input[i]
    aAmount += a
    bAmount += b
    cAmount += c
    let min = Math.min(aAmount,bAmount,cAmount)
    if(min >= 30){
        aAmount -= min
        bAmount -= min
        cAmount -= min
        result.push(min)
    }
    else{
        result.push('NO')
    }
}
console.log(result.join('\n'))