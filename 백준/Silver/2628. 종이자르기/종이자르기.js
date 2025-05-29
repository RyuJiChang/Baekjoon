const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x, y] = input[0]
const xList = [0,x]
const yList = [0,y]
let maxX = 0
let maxY = 0

for(let i = 2 ; i < input.length ; i++){
    if(input[i][0]){
        xList.push(input[i][1])
    }
    else{
        yList.push(input[i][1])
    }
}
xList.sort((a,b) => a-b)
yList.sort((a,b) => a-b)

for(let i = 0 ; i < xList.length-1 ; i++){
    const value = xList[i+1] - xList[i]
    maxX = Math.max(maxX, value)
}

for(let i = 0 ; i < yList.length-1 ; i++){
    const value = yList[i+1] - yList[i]
    maxY = Math.max(maxY, value)
}


console.log(maxX * maxY)