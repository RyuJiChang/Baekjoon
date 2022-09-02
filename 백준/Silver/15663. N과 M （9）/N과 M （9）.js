const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let nums = input[0].split(' ').map(Number)
let arrs = input[1].split(' ').map(Number).sort((a,b) => a-b)
let result = []

function recul(n,a,str) {
    if(n === 0){
        // if(result.indexOf(str.trim()) === -1){
        result.push(str.trim())       
        // }
        return
    }   
    
    for(let i = 0 ; i < nums[0] ; i++){
        if(a.indexOf(i) !== -1){
            continue
        }
        else{
        recul(n-1,[...a , i],`${str} ${arrs[i]}`)
        }
    }
}
recul(nums[1] , [] , '')
result = [...new Set(result)]
// console.log(result.length)


console.log(result.join('\n'))