const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

let peopleData = input.slice(1).map((el,index) => [...el.split(' ').map(Number),index])

for(let i = 0 ; i < peopleData.length ; i++){
    let order = 1
    for(let j = 0 ; j < peopleData.length ; j++){
        if(peopleData[i][0] < peopleData[j][0] && peopleData[i][1] < peopleData[j][1]){
            order++
        }
    }
    result.push(order)
}

console.log(result.join(' '))