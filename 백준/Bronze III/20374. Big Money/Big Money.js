const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let bigSum = 0n
for(let i = 0 ; i < input.length ; i += 10){
    let numSum = 0
    for(let j = i ; j < Math.min(i + 10, input.length) ; j++){
        numSum += input[j]*100
    }
    bigSum += BigInt(String(numSum))
}
let str
if(bigSum >= 100n){
    str = String(bigSum)
}
else if(bigSum >= 10n){
    str = '0' + String(bigSum)
}
else if(bigSum > 0n){
    str = '00' + String(bigSum)
}
else{
    str = '000'
}

console.log(str.slice(0,str.length-2) + '.' + str.slice(str.length-2))