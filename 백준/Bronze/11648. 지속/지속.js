let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0

while(input > 9){
    count++
    let tempInput = 1
    let arr = String(input).split('').map(Number)
    for(let i = 0 ; i < arr.length ; i++){
        tempInput *= arr[i]
    }
    input = tempInput
}

console.log(count)