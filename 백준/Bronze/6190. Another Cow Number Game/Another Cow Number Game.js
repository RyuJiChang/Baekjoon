let num = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0
while (num > 1) {
    count++
    if(num%2){
        num = num * 3 + 1
    }
    else{
        num/=2
    }
}

console.log(count)