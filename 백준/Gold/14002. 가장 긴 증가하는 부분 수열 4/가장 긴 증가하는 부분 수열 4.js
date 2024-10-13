const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split(' ').map(Number)

const arr = []
const index = []
const beforeIndex = []
const result = []

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
    index.push(low)
    if(low > 0){
        beforeIndex[i] = index.lastIndexOf(low-1)
    }
    
}

let now = index.lastIndexOf(arr.length-1)

while(now != undefined){
    result.push(input[now])
    now = beforeIndex[now]
}

console.log(arr.length)
console.log(result.reverse().join(' '))