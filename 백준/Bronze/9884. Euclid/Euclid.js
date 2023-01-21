let [num1, num2] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)


while(num1%num2){
    const temp = num1
    num1 = num2
    num2 = temp%num2
}

console.log(num2)