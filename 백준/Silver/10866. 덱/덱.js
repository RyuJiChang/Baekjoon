const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const deque = []
const result = []

for(let i = 1 ; i < input.length ; i++){
    if(input[i] === "pop_front"){
        const shifted = deque.shift()
        if(shifted === undefined){
            result.push(-1)
        }
        else{
            result.push(shifted)
        }
    }
    else if(input[i] === "pop_back"){
        const poped = deque.pop()
        if(poped === undefined){
            result.push(-1)
        }
        else{
            result.push(poped)
        }
    }
    else if(input[i] === "size"){
        result.push(deque.length)
    }
    else if(input[i] === "empty"){
        result.push(Number(deque.length < 1))
    }
    else if(input[i] === "front"){
        const shifted = deque.shift()
        if(shifted === undefined){
            result.push(-1)
        }
        else{
            result.push(shifted)
            deque.unshift(shifted)
        }
    }
    else if(input[i] === "back"){
        const poped = deque.pop()
        if(poped === undefined){
            result.push(-1)
        }
        else{
            result.push(poped)
            deque.push(poped)
        }
    }
    else{
        const [order, number] = input[i].split(' ')
        if(order === "push_front"){
            deque.unshift(number)
        }
        else{
            deque.push(number)
        }
    }
}

console.log(result.join('\n'))