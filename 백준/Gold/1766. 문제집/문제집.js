const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const depth = new Array(input[0][0] + 1).fill(0)
const next = new Array(input[0][0] + 1)
const queue = []
const result = []

for(let i = 1 ; i <= input[0][0] ; i++){
    next[i] = new Array()
}

for(let i = 1 ; i < input.length ; i++){
    const [before, after] = input[i]
    depth[after]++
    next[before].push(after)
}

for(let i = 1 ; i < depth.length ; i++){
    if(depth[i] == 0){
        queue.push(i)
    }
}

const pushQueue = (num) => {
    let indexNow = queue.length
    queue.push(num)
    while(indexNow > 0){
        parentIndex = Math.floor((indexNow - 1) / 2)
        if(queue[parentIndex] < queue[indexNow]){
            break
        }
        else{
            const temp = queue[parentIndex]
            queue[parentIndex] = queue[indexNow]
            queue[indexNow] = temp
            indexNow = parentIndex
        }
    }
}

const popQueue = () => {
    const result = queue[0]
    let indexNow = 0
    
    if(queue.length == 1){
        queue.pop()
        return result
    }
    
    queue[0] = queue.pop()

    while(queue[indexNow] > queue[indexNow * 2 + 1] 
          || queue[indexNow] > queue[indexNow * 2 + 2]){
        if(queue[indexNow * 2 + 1] > queue[indexNow * 2 + 2]){
            const temp = queue[indexNow]
            queue[indexNow] = queue[indexNow * 2 + 2]
            queue[indexNow * 2 + 2] = temp
            indexNow = indexNow * 2 + 2
        }
        else{
            const temp = queue[indexNow]
            queue[indexNow] = queue[indexNow * 2 + 1]
            queue[indexNow * 2 + 1] = temp
            indexNow = indexNow * 2 + 1
        }
    }

    return result
}

while(queue.length > 0){
    const now = popQueue()
    result.push(now)
    for(let i = 0 ; i < next[now].length ; i++){
        checkIndex = next[now][i]
        depth[checkIndex]--
        if(depth[checkIndex] == 0){
            pushQueue(checkIndex)
        }
    }
}

console.log(result.join(' '))