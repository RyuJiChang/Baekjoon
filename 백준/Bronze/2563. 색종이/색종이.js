const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let allXY = []
let numSqa = Number(input[0])

for(let i = 1 ; i <= numSqa ; i++){
    let [a,b] = input[i].split(' ').map(Number)
    for(let j = a+1 ; j <= a+10 ; j++){
        for(let k = b+1 ; k <= b+10 ; k++){
            allXY.push(`${j} ${k}`)
        }
    }
}
console.log(new Set(allXY).size)