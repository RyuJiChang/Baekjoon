const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const list = []
let sum = input.reduce((a,b) => a+b)

for(let i = 0 ; i < input.length ; i++){
    if(list[input[i]]){
        list[input[i]]++
    }
    else{
        list[input[i]] = 1
    }
}
const listInMax = list.filter(el => el > 0)
const maxcount = Math.max(...listInMax)


console.log(sum/input.length)

for(let i = 0 ; i < list.length ; i++){
    if(list[i] == maxcount){
        console.log(i)
        break
    }
}