const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i+=10){
    let [rSum, zSum, bSum] = [0,0,0]
    for(let j = i ; j < i + 10 ; j++){
        let [r, z, b] = input[j].split(' ').map(Number)
        rSum += r
        zSum += z
        bSum += b
    }
    result.push(Math.round(rSum/10) + ' ' + Math.round(zSum/10) + ' ' + Math.round(bSum/10))
}

console.log(result.join('\n'))