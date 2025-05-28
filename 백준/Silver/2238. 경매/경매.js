const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' '))
input.shift()
const counting = {}

for(let i = 0 ; i < input.length ; i++){
    const [name, price] = input[i]
    if(counting[price]){
        counting[price]++
    }
    else{
        counting[price] = 1
    }
}

const minCount = Math.min(...Object.values(counting))
let minValue

for(key in counting){
    if(counting[key] == minCount){
        minValue = key
        break
    }
}
console.log(input.filter(el => el[1] == minValue)[0].join(' '))