const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
const [x, y] = input.shift().map(Number)

const dpsX = [0]
const dpsY = [0]
input[0][0] = 'X'
let isLeft = true
let count = 0

const checkCheese = () => {
    for(let i = 0 ; i < input.length ; i++){
        for(let j = 0 ; j < input[0].length ; j++){
            if(input[i][j] == 1){
                return true
            }
        }
    }
    return false
}
const checkBlank = (x,y) => {
    if(input[x+1] && input[x+1][y] == '0'){
        input[x+1][y] = 'X'
        dpsX.push(x+1)
        dpsY.push(y)
    }
    if(input[x-1] && input[x-1][y] == '0'){
        input[x-1][y] = 'X'
        dpsX.push(x-1)
        dpsY.push(y)
    }
    if(input[x][y+1] == '0'){
        input[x][y+1] = 'X'
        dpsX.push(x)
        dpsY.push(y+1)
    }
    if(input[x][y-1] == '0'){
        input[x][y-1] = 'X'
        dpsX.push(x)
        dpsY.push(y-1)
    }
}
const checkAir = (x,y) => {
    let count = 0
    if(input[x+1] && input[x+1][y] == 'X'){
        count++
    }
    if(input[x-1] && input[x-1][y] == 'X'){
        count++
    }
    if(input[x][y+1] == 'X'){
        count++
    }
    if(input[x][y-1] == 'X'){
        count++
    }
    if(count >= 2){
        input[x][y] = 'C'
    }
}
const checkC = () => {
    for(let i = 0 ; i < input.length ; i++){
        for(let j = 0 ; j < input[0].length ; j++){
            if(input[i][j] == '1'){
                checkAir(i,j)
            }
        }
    }
}
const changeC = () => {
    for(let i = 0 ; i < input.length ; i++){
        for(let j = 0 ; j < input[0].length ; j++){
            if(input[i][j] == 'C'){
                input[i][j] = 'X'
                dpsX.push(i)
                dpsY.push(j)
            }
        }
    }
}

while(isLeft){
    if(checkCheese() == false){
        isLeft = checkCheese()
        break
    }
    count++
    while(dpsX.length > 0){
        const x = dpsX.pop()
        const y = dpsY.pop()
        checkBlank(x,y)
    }
    checkC()
    changeC()
}

console.log(count)