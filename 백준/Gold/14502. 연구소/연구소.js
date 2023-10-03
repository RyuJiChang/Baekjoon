const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x, y] = input.shift()
const zeroArr = []
let max = 0

const dps = (arr) => {
    const stack = []
    let count = 0
    for(let i = 0 ; i < arr.length ; i++){
        for(let j = 0 ; j < arr[0].length ; j++){
            if(arr[i][j] === 2){
                stack.push([i, j])
            }
        }
    }
    while (stack.length > 0) {
        const [x, y] = stack.pop()
        if(arr[x-1] && arr[x-1][y] === 0){
            arr[x-1][y] = 2
            stack.push([x-1, y])
        }
        if(arr[x+1] && arr[x+1][y] === 0){
            arr[x+1][y] = 2
            stack.push([x+1, y])
        }
        if(arr[x][y+1] === 0){
            arr[x][y+1] = 2
            stack.push([x, y+1])
        }
        if(arr[x][y-1] === 0){
            arr[x][y-1] = 2
            stack.push([x, y-1])
        }
    }

    for(let i = 0 ; i < x ; i++){
        for(let j = 0 ; j < y ; j++){
            if(arr[i][j] === 0){
                count++
            }
        }
    }
    return count
}

for(let i = 0 ; i < x ; i++){
    for(let j = 0 ; j < y ; j++){
        if(input[i][j] === 0){
            zeroArr.push([i,j])
        }
    }
}


for(let i = 0 ; i < zeroArr.length-2 ; i++){
    for(let j = i+1 ; j < zeroArr.length-1 ; j++){
        for(let k = j+1 ; k < zeroArr.length ; k++){
            const newArr = []
            for(let i = 0 ; i < x ; i++){
                newArr.push([...input[i]])
            }
            newArr[zeroArr[i][0]][zeroArr[i][1]] = 1
            newArr[zeroArr[j][0]][zeroArr[j][1]] = 1
            newArr[zeroArr[k][0]][zeroArr[k][1]] = 1
            max = Math.max(max, dps(newArr))
        }
    }
}

console.log(max)