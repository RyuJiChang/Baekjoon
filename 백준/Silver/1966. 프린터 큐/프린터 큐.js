const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const targetOrderChecker = (arr, target) => {
    let printCount = 0
    let sortedArr = [...arr].sort((a,b) => a-b)
    let needToPrint = sortedArr.pop()
    let checkIndex = 0
    
    while(arr[target] !== 0){
        if(needToPrint === arr[checkIndex]){
            arr[checkIndex] = 0
            printCount++
            needToPrint = sortedArr.pop() 
        }
        checkIndex = (checkIndex + 1) % (arr.length)
    }
    return printCount
}

for(let i = 1 ; i < input.length ; i+=2){
    const [waitAmount, targetOrder] = input[i].split(' ').map(Number)
    let waitList = input[i+1].split(' ').map(Number)
    result.push(targetOrderChecker(waitList, targetOrder))
}


console.log(result.join('\n'))