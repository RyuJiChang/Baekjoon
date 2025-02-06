const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []
const checkWinner = (arr) => {
    const total = arr.reduce((a,b) => a+b)
    const max = Math.max(...arr)
    if(arr.filter(el => el > total / 2).length){
        return 'majority winner ' + (arr.indexOf(max) + 1)
    }
    else if(arr.filter(el => el == max).length > 1){
        return 'no winner'
    }
    else{
        return 'minority winner ' + (arr.indexOf(max) + 1)
    }
}

for(let i = 1 ; i < input.length ; i++){
    let length = input[i]
    const testArr = [...input.slice(i + 1, i + length + 1)]
    result.push(checkWinner(testArr))
    i += length
}

console.log(result.join('\n'))