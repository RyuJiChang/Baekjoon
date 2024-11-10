const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const [size, left] = input.shift()
const home = []
const chicken = []
let minDistanceResult = Infinity

for(let i = 0 ; i < size ; i++){
    for(let j = 0 ; j < size ; j++){
        if(input[i][j] == 1){
            home.push([i,j])
        }
        else if(input[i][j] == 2){
            chicken.push([i,j])
        }
    }
}

const distanceCheck = (selectedChikenArr) => {
    let distanceSum = 0

    for(let i = 0 ; i < home.length ; i++){
        let minDistance = Infinity
        for(let j = 0 ; j < selectedChikenArr.length ; j++){
            let xDistance = Math.abs(home[i][0] - chicken[selectedChikenArr[j]][0])
            let yDistance = Math.abs(home[i][1] - chicken[selectedChikenArr[j]][1])
            minDistance = Math.min(minDistance, xDistance + yDistance)
        }
        distanceSum += minDistance
    }

    return distanceSum
}

const recurtion = (arr, start) => {
    if(arr.length == left){
        minDistanceResult = Math.min(minDistanceResult, distanceCheck(arr))
        return
    }
    for(let i = start ; i < chicken.length ; i++){
        arr.push(i)
        recurtion(arr, i + 1)
        arr.pop()
    }
}

recurtion([], 0)
console.log(minDistanceResult)