const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1]
const adrianPick = 'ABC'
const brunoPick = 'BABC'
const goranPick = 'CCAABB'
let adrian = 0
let bruno = 0
let goran = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i] == adrianPick[i % 3]){
        adrian++
    }
    if(input[i] == brunoPick[i % 4]){
        bruno++
    }
    if(input[i] == goranPick[i % 6]){
        goran++
    }
}

const maxPoint = Math.max(adrian, bruno, goran)
console.log(maxPoint)
if(adrian == maxPoint) console.log('Adrian')
if(bruno== maxPoint) console.log('Bruno')
if(goran == maxPoint) console.log('Goran')