const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const queue = []
const result = []

for(let i = 1 ; i < input.length ; i++){
    if(input[i] === "pop"){
        if(queue.length){
            result.push(queue.shift())
        }
        else{
            result.push(-1)
        }
    }
    else if(input[i] === "size"){
        result.push(queue.length)
    }
    else if(input[i] === "empty"){
        if(queue.length){
            result.push(0)
        }
        else{
            result.push(1)
        }
        
    }
    else if(input[i] === "front"){
        if(queue.length){
            result.push(queue[0])
        }
        else{
            result.push(-1)
        }
    }
    else if(input[i] === "back"){
        if(queue.length){
            const popNum = queue.pop()
            result.push(popNum)
            queue.push(popNum)
        }
        else{
            result.push(-1)
        }
    }
    else{
        const pushNum = Number(input[i].split(' ')[1])
        queue.push(pushNum)
    }
}

console.log(result.join('\n'))