let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 1 ; i < input.length ; i++){
    let partsNum = input[i].split(' ').map(Number)
    let price = [350.34, 230.90, 190.55, 125.30, 180.90]
    let sum = 0
    for(let j = 0 ; j < 5 ; j++){
        sum += (Math.round(partsNum[j]*price[j]*100)/100)
    }
    let numStr = '$' + String(sum)
    if(numStr[numStr.length-3] === '.'){
        result.push(numStr)
    }
    else if(numStr[numStr.length-2] === '.'){
        result.push(numStr + '0')
    }
    else{
        result.push(numStr + '.00')
    }
}

console.log(result.join('\n'))