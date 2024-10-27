const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const arr = []
let result = 0

const pushToHeap = (num) => {
    arr.push(num)
    let indexNow = arr.length-1
    while(indexNow > 0){
        const parentNode = Math.floor((indexNow-1)/2)
        if(arr[indexNow] < arr[parentNode]){
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
    while(arr[indexNow] > arr[indexNow*2+1] || arr[indexNow] > arr[indexNow*2+2]){
        const [child1, child2] = [indexNow*2+1, indexNow*2+2]
        if(arr[child1] > arr[child2]){
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
    pushToHeap(input[i])
}

while (arr.length > 1) {
    const first = popFromHeap()
    const second = popFromHeap()
    const sum = first + second
    result += sum
    if(arr.length){
        pushToHeap(sum)
    }
}

console.log(result)