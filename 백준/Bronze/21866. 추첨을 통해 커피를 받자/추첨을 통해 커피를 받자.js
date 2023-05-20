const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const limit = [100,100,200,200,300,300,400,400,500]
let sum = 0
let isHacker = false
for(let i = 0 ; i < input.length ; i++){
    if(input[i] >limit[i]){
        isHacker = true
        break
    }
    else{
        sum += input[i]
    }
}

if(isHacker){
    console.log('hacker')
}
else if(sum >= 100){
    console.log('draw')
}
else{
    console.log('none')
}