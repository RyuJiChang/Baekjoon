const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0
const checker = (num) => {
    const first = num
    let sum = 0
    while (num >= 10) {
        sum += num % 10
        num = Math.floor(num / 10)
    }
    sum += num
    return first % sum == 0
}

for(let i = 1 ; i <= input ; i++){
    if(checker(i)){
        count++
    }
}
console.log(count)