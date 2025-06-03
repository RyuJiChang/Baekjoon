const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let joi = 0
let ioi = 0

for(let i = 0 ; i < input.length ; i++){
    const str = input.slice(i,i+3)
    if(str == 'JOI'){
        joi++
    }
    else if(str == 'IOI'){
        ioi++
    }
}

console.log(joi)
console.log(ioi)