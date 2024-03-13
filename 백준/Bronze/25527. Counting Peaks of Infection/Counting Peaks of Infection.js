const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 1 ; i < input.length ; i += 2){
    let count = 0
    const arr = input[i].split(' ').map(Number)
    for(let j = 1 ; j < arr.length - 1 ; j++){
        if(arr[j] > arr[j-1] && arr[j] > arr[j+1]){
            count++
        }
    }
    console.log(count)
}