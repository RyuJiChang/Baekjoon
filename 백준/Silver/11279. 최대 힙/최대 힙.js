const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let arr = []
let result = []

const pushToHeap = (num) => {
    arr.push(num)
    let indexNow = arr.length-1
    while(indexNow > 0){
        const parentNode = Math.floor((indexNow-1)/2)
        if(arr[indexNow] > arr[parentNode]){
            const temp = arr[parentNode]
            arr[parentNode] = arr[indexNow]
            arr[indexNow] = temp
            indexNow = parentNode
        }
        else{
            break
        }
    }
}

const popFromHeap = () => {
    const popNumber = arr[0]
    const lastNum = arr.pop()
    if(arr.length === 0){
        return popNumber
    }
    arr[0] = lastNum
    
    let indexNow = 0
    while(arr[indexNow] < arr[indexNow*2+1] || arr[indexNow] < arr[indexNow*2+2]){
        const [child1, child2] = [indexNow*2+1, indexNow*2+2]
        if(arr[child1] < arr[child2]){
            const temp = arr[child2]
            arr[child2] = arr[indexNow]
            arr[indexNow] = temp
            indexNow = child2
        }
        else{
            const temp = arr[child1]
            arr[child1] = arr[indexNow]
            arr[indexNow] = temp
            indexNow = child1
        }
    }
    return popNumber
}

for(let i = 1 ; i < input.length ; i++){
    if(input[i] !== 0){
        pushToHeap(input[i])
    }
    else if(input[i] === 0 && arr.length === 0){
        result.push(0)
    }
    else{
        result.push(popFromHeap())
    }
}
console.log(result.join('\n'))