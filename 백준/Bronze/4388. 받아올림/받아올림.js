const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const result = []
for(let i = 0 ; i < input.length -1 ; i++){
    const [num1, num2] = input[i]
    const sum = String(num1+num2).split('').reverse()
    const bigNum = String(Math.max(num1, num2)).split('').reverse()
    let count = 0
    for(let j = 0 ; j < bigNum.length ; j++){
        if(bigNum[j] > sum[j]){
            count++
        }
    }
    result.push(count)
}

console.log(result.join('\n'))