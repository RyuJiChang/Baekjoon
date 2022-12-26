let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []
for(let i = 0 ; i < input.length-1 ; i++){
    let num = input[i]
    while(num.length >= 2){
        let temp = num
        let sum = 0
        for(let i = 0 ; i < temp.length ; i++){
            sum += Number(temp[i])
        }
        num = String(sum)
    }
    result.push(num)
}
console.log(result.join('\n'))