const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const sanggeunCard = input[1].split(' ').map(Number)
const needToCheck = input[3].split(' ').map(Number)
const hashObject = {}
const result = []

for(let i = 0 ; i < sanggeunCard.length ; i++){
    const hashingNow = sanggeunCard[i]
    if(hashObject[hashingNow]){
        hashObject[hashingNow]++
    }
    else hashObject[hashingNow] = 1
}

needToCheck.forEach(el => {
    if(hashObject[el]){
        result.push(hashObject[el])
    }
    else{
        result.push(0)
    }
})

console.log(result.join(' '))