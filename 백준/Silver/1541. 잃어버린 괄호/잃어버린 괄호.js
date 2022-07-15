const str = require('fs').readFileSync('/dev/stdin').toString().trim().split('-')
let plus = str.slice(0,1)
let minus = str.slice(1)
let plusArr = []
let minusArr = []
let result = 0
for(let i = 0 ; i < plus.length ; i++){
    plusArr.push(...plus[i].split('+'))
}
for(let i = 0 ; i < minus.length ; i++){
    minusArr.push(...minus[i].split('+'))
}
for(let i = 0 ; i < plusArr.length ; i++){
    result += Number(plusArr[i])
}
for(let i = 0 ; i < minusArr.length ; i++){
    result -= Number(minusArr[i])
}

console.log(result)