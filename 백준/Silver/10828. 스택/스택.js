const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []
const stack = []

for(let i = 1 ; i < input.length ; i++){
    if(input[i] === "pop"){
        const popNow = stack.pop()
        if(popNow !== undefined){
            result.push(popNow)
        }
        else{
            result.push(-1)
        }
        
    }
    else if(input[i] === "size"){
        result.push(stack.length)
    }
    else if(input[i] === "empty"){
        result.push(stack.length ? 0 : 1)
    }
    else if(input[i] === "top"){
        const topNow = stack.pop()
        if(topNow !== undefined){
            stack.push(topNow)
            result.push(topNow)
        }
        else{
            result.push(-1)
        }
    }
    else{
        const pushNum = input[i].split(' ').map(Number)[1]
        stack.push(pushNum)
    }
}

console.log(result.join('\n'))