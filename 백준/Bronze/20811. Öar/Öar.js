const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

const arr = [1,1]
let sum = 2
let count = 2
if(input <= 2){
    count = input
}
while(sum < input){
    arr[count] = arr[count-1] + arr[count-2]
    sum += arr[count]
    count++
}

console.log(count)
