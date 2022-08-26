const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


let nums = input[0].split(' ').map(Number)
let arrs = input[1].split(' ').map(Number).sort((a,b) => a-b)
let result = []

function recul(n,a,str) {
    if(n === 0){
        result.push(str.trim())
        return
    }    
    for(let i = a ; i < nums[0] ; i++){
        recul(n-1,i,`${str} ${arrs[i]}`)
    }
}
recul(nums[1] , 0 , '')
console.log(result.join('\n'))