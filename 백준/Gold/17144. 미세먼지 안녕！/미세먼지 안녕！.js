let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [x, y, time] = input.shift()
let airCleanerIndex
let newArr = []
let count = 0

for(let i = 0 ; i < input.length ; i++){
    if(input[i].includes(-1)){
        airCleanerIndex = i
        break
    }
}

const arrReset = () => {
    newArr = []
    for(let i = 0 ; i < x ; i++){
        newArr.push(new Array(y).fill(0))
    }
    newArr[airCleanerIndex][0] = -1
    newArr[airCleanerIndex + 1][0] = -1
}

const spread = (i,j,num) => {
    const spreadNum = Math.floor(num/5)
    let spreadCount = 0
    if(newArr[i][j+1] != null && newArr[i][j+1] != -1){
        newArr[i][j+1] += spreadNum
        spreadCount++
    }
    if(newArr[i][j-1] != null && newArr[i][j-1] != -1){
        newArr[i][j-1] += spreadNum
        spreadCount++
    }
    if(newArr[i+1] != null && newArr[i+1][j] != null && newArr[i+1][j] != -1){
        newArr[i+1][j] += spreadNum
        spreadCount++
    }
    if(newArr[i-1] != null && newArr[i-1][j] != null && newArr[i-1][j] != -1){
        newArr[i-1][j] += spreadNum
        spreadCount++
    }
    newArr[i][j] += num - spreadCount * spreadNum
}

const spreadAll = () => {
    arrReset()
    for(let i = 0 ; i < x ; i++){
        for(let j = 0 ; j < y ; j++){
            if(input[i][j] > 0 ){
                spread(i,j,input[i][j])
            }
        }
    }
    input = newArr
}

const workAirConditioner = () => {
    //윗부분 좌측
    for(let i = airCleanerIndex - 1 ; i > 0 ; i--){
        input[i][0] = input[i-1][0]
    }

        //윗부분 상단
    for(let i = 0 ; i < y-1 ; i++){
        input[0][i] = input[0][i+1]
    }

    //윗부분 우측
    for(let i = 0 ; i < airCleanerIndex ; i++){
        input[i][y-1] = input[i+1][y-1]
    }

    //윗부분 하단
    for(let i = y-1 ; i > 1 ; i--){
        input[airCleanerIndex][i] = input[airCleanerIndex][i-1]
    }
    //0 추가
    input[airCleanerIndex][1] = 0


///아랫부분 수정필요
    //아랫부분 좌측
    for(let i = airCleanerIndex + 2 ; i < x-1 ; i++){
        input[i][0] = input[i+1][0]
    }

    //아랫부분 하단
    for(let i = 0 ; i < y-1 ; i++){
        input[x-1][i] = input[x-1][i+1]
    }

    //아랫부분 우측
    for(let i = x-1 ; i > airCleanerIndex+1 ; i--){
        input[i][y-1] = input[i-1][y-1]
    }

    //아랫부분 상단
    for(let i = y-1 ; i > 1 ; i--){
        input[airCleanerIndex+1][i] = input[airCleanerIndex+1][i-1]
    }

    //0 추가
    input[airCleanerIndex+1][1] = 0
}

while (count < time) {
    spreadAll()
    workAirConditioner()
    count++
}

let sum = 0
for(let i = 0 ; i < x ; i++){
    for(let j = 0 ; j < y ; j++){
        sum += input[i][j]
    }
}
console.log(sum + 2)