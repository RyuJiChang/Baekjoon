const [num, pow] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')
const dotIndex = num.indexOf('.')
const bigNum = BigInt(num.replace('.', ''))
let deciamlCount = num.length - 1 - dotIndex
let bigNumPow = 1n

for(let i = 0 ; i < pow ; i++){
    bigNumPow *= bigNum
}

const bigNumStr = String(bigNumPow)
const totalDecimalPlaces = deciamlCount * pow

if(bigNumStr.length <= totalDecimalPlaces){
    const padded = bigNumStr.padStart(totalDecimalPlaces, '0')
    console.log(`0.${padded}`)
} 
else{
    const integerPart = bigNumStr.slice(0, bigNumStr.length - totalDecimalPlaces)
    const decimalPart = bigNumStr.slice(bigNumStr.length - totalDecimalPlaces)
    console.log(`${integerPart}.${decimalPart}`)
}