const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const result = []
const breaker = (num) => {
    while (num > 9) {
        let nums = String(num).split('').map(Number)
        let sum = 0
        for(let i = 0 ; i < nums.length ; i++){
            sum += nums[i]
        }
        num = sum
    }
    return num
}

for(let i = 0 ; i < input.length - 1 ; i++){
    result.push(breaker(input[i]))
}

console.log(result.join('\n'))