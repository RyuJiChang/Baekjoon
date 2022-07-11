const input = require('fs').readFileSync('/dev/stdin').toString().trim()
let num = Number(input)
let result = 0
for(let i = 0 ; i <= 5 ; i++){
    if(i === 0 && num === 4){
        result = -1
        break
    }
    if(i === 0 && num === 7){
        result = -1
        break
    }    
    if(i === 5){
        result = -1
        break
    }
    if(num % 5 === 0){
        result += num/5
        break
    }
    result += 1
    num -= 3
}
console.log(result)