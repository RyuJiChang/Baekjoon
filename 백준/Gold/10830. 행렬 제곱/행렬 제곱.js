let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1 ; i < input.length ; i++){
 input[i] = input[i].split(' ').map(Number)   
}

let size = Number(input[0].split(' ')[0])
let num = BigInt(input[0].split(' ')[1])
let arr = input.slice(1)
let sum
function multy(arr,arr2){
    let result = []
    for(let i = 0 ; i < size ; i++){
        result.push(new Array(size).fill(0))
    }
    for(let i = 0 ; i < size ; i++){
        for(let j = 0 ; j < size ; j++){
            sum = 0
            for(let k = 0 ; k < size ; k++){
               sum += arr[i][k] * arr2[k][j]
            }
            result[i][j] = sum%1000
        }
    }
    return result
}

function recurtion(arr,n) {
    if(n === 1n){
        return arr
    }

    if(n%2n === 1n){
        return multy(arr,recurtion(multy(arr,arr) ,(n-1n)/2n))
    }
    else{
        return recurtion(multy(arr,arr), n/2n)
    }
}

let result = recurtion(arr, num)

for(let i = 0 ; i < size ; i++){
    for(let j = 0 ; j < size ; j++){
        result[i][j] = result[i][j]%1000
    }    
}

for(let i = 0 ; i < result.length ; i++){
    console.log(result[i].join(' '))
}