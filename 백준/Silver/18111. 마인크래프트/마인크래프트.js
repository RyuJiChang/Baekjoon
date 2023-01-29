const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))

const heightArr = []
const eachHeightCost = []
const blockAmount = input[0][2]

for(let i = 1 ; i < input.length ; i++){
    heightArr.push(...input[i])
}

let maxHeight = Math.max(...heightArr)
let minHeight = Math.min(...heightArr)

const calculateFlatCost = (floor) => {
    let add = 0
    let remove = 0
    for(let i = 0 ; i < heightArr.length ; i++){
        if(floor > heightArr[i]){
            add += floor-heightArr[i]
        }
        else if(floor < heightArr[i]){
            remove += heightArr[i] - floor
        }
    }

    return [add, remove]
}


for(let i = maxHeight ; i >= minHeight ; i--){
    const [add, remove] = calculateFlatCost(i)
    if(blockAmount + remove - add >= 0){
        eachHeightCost.push([add*1 + remove*2, i])
    }
}

console.log(eachHeightCost.sort((a,b) => a[0] - b[0])[0].join(' '))