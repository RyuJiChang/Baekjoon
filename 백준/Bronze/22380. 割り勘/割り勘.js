const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

for(let i = 1 ; i < input.length ; i+=2){
    const [peopleNum, price] = input[i-1].split(' ').map(Number)
    const peopleMoney = input[i].split(' ').map(Number)
    const eachHaveToPay = price/peopleNum
    let sum = 0
    for(let j = 0 ; j < peopleMoney.length ; j++){
        if(peopleMoney[j] > eachHaveToPay){
            sum += eachHaveToPay
        }
        else{
            sum += peopleMoney[j]
        }
    }
    result.push(sum)
}

console.log(result.join('\n'))