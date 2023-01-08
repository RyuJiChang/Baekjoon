let input = require('fs').readFileSync('/dev/stdin').toString().trim()
const changeNum = (str) =>{
    let thirdNum
    if(str.length === 1){
        str = '0'+str
    }
    let [firstNum, secondNum] = str.split('').map(Number)
    if(firstNum+secondNum >= 10){
        thirdNum = firstNum+secondNum -10
    }
    else{
        thirdNum = firstNum+secondNum
    }
    if(secondNum){
        return `${secondNum}${thirdNum}`
    }
    else{
        return String(thirdNum)
    }
}
let strNow = input
let cycle = 0

while (cycle === 0 || input !== strNow){
    cycle++
    strNow = changeNum(strNow)
}

console.log(cycle)