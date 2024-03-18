const [start, target] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let stack = []
let newStack = []
const checkArr = new Array(100001).fill(Infinity)
const countArr = new Array(100001).fill(0)
checkArr[start] = 0
countArr[start] = 1

const bps = (num) => {
    if(num > 0 && checkArr[num - 1] > checkArr[num] + 1){
        checkArr[num - 1] = checkArr[num] + 1 
        countArr[num - 1] += countArr[num]
        newStack.push(num - 1)
    }
    else if(checkArr[num - 1] == checkArr[num] + 1){
        countArr[num - 1] += countArr[num]
    }

    if(num < 50001 && checkArr[num * 2] > checkArr[num] + 1){
        checkArr[num * 2] = checkArr[num] + 1 
        newStack.push(num * 2)
        countArr[num * 2] += countArr[num]
    }
    else if(checkArr[num * 2] == checkArr[num] + 1){
        countArr[num * 2] += countArr[num]
    }

    if(num < 100001 && checkArr[num + 1] > checkArr[num] + 1){
        checkArr[num + 1] = checkArr[num] + 1 
        newStack.push(num + 1)
        countArr[num + 1] += countArr[num]
    }
    else if(checkArr[num + 1] == checkArr[num] + 1){
        countArr[num + 1] += countArr[num]
    }

}


if(start != target){
    bps(start)
    stack = newStack
    newStack = []
}

while(checkArr[target] == Infinity){
    while(stack.length > 0){
        bps(stack.pop())
    }
    stack = newStack
    newStack = []
}

console.log(checkArr[target])
console.log(countArr[target])