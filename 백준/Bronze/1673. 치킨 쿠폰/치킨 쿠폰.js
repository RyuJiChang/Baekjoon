const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 0 ; i < input.length ; i++){
    const [n, k] = input[i].split(' ').map(Number)
    let sum = n
    let coupon = n
    while(coupon >= k){
        const chicken = Math.floor(coupon / k)
        sum += chicken
        coupon = coupon % k
        coupon += chicken
    }
    result.push(sum)
}

console.log(result.join('\n'))