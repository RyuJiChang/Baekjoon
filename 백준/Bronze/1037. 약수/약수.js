let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const gcdCalulater = (a,b) => {
    let num1 = a
    let num2 = b
    while (num1 % num2) {
        let temp = num1
        num1 = num2
        num2 = temp%num2
    }
    return a*b/num2
}

let result = 1
let maxNum = Math.max(...input)
let minNum = Math.min(...input)
for(let i = 0 ; i < input.length ; i++){
    result = gcdCalulater(result,input[i])
}

if(maxNum === result){
    console.log(result*minNum)
}
else{
    console.log(result)
}