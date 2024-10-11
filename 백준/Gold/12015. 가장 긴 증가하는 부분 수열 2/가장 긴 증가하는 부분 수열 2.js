const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)
const arr = []

for(let i = 0 ; i < input.length ; i++){
    let low = 0
    let high = arr.length

    while(low < high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid] < input[i]){
            low = mid + 1
        } 
        else{
            high = mid
        }
    }

    if(low < arr.length){
        arr[low] = input[i]
    }
    else{
        arr.push(input[i])
    }
}

console.log(arr.length)