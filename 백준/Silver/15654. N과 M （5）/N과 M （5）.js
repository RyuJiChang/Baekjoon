const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let nums = input[0].split(' ').map(Number)
let arrs = input[1].split(' ').map(Number).sort((a,b) => a-b)
let result = []

function recul(n,arr,str) {
    if(n === 0){
        result.push(str.trim())
        return
    }    
    for(let i = 0 ; i < nums[0] ; i++){
        if(arr.indexOf(i) !== -1){
            continue
        }
        recul(n-1,[...arr , i],`${str} ${arrs[i]}`)
    }
}
recul(nums[1] , [] , '')
console.log(result.join('\n'))