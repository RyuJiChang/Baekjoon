const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const queue = []
const result = []
let index = 0
let length = 0

for(let i = 1 ; i < input.length ; i++){
    if(input[i][1] == 'u'){
        const num = input[i].slice(5)
        queue.push(num)
        length++
    }
    else if(input[i][1] == 'o' && length > 0){
        result.push(queue[index])
        length--
        index++
    }
    else if(input[i][1] == 'i'){
        result.push(length)
    }
    else if(input[i][1] == 'm'){
        result.push(length == 0 ? 1 : 0)
    }
    else if(input[i][1] == 'r' && length > 0){
        result.push(queue[index])
    }
    else if(input[i][1] == 'a' && length > 0){
        result.push(queue[length + index - 1])
    }
    else{
        result.push(-1)
    }
}

console.log(result.join('\n'))