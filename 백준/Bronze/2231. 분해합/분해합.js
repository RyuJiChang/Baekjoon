const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let result = 0
const makerCheck = (num) => {
    let result = num
    while(num){
       result += num%10
        num = Math.floor(num/10)
    }
    if(result === input) return true
    else return false
}

for(let i = 1 ; i <= input ; i++){
    if(makerCheck(i)){
        result = i
        break
    }
}

console.log(result)