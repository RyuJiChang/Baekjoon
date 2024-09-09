const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const amount = Number(input[i])
    let minRate = Infinity
    let bestPrice = Infinity
    for(let j = i + 1 ; j <= i + amount ; j++){
        const [gram, price] = input[j].split(' ').map(Number)
        const rate = price/gram
        if(rate < minRate){
            minRate = rate
            bestPrice = price
        }
        else if(rate == minRate && price < bestPrice){
            minRate = rate
            bestPrice = price
        }
    }
    result.push(bestPrice)
    i += amount
}

console.log(result.join('\n'))
