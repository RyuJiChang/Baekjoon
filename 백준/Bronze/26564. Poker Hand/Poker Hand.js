const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const result = []

for(let i = 1 ; i < input.length ; i++){
    const arr = input[i].split(' ').map(el => el[0])
    const cards = {A:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0, 10:0, J:0, Q:0, K:0}
    let maxCount = 0
    for(let j = 0 ; j < arr.length ; j++){
        cards[arr[j]]++
    }
    for(key in cards){
        if(maxCount < cards[key]){
            maxCount = cards[key]
        }
    }
    result.push(maxCount)
}

console.log(result.join('\n'))