const [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const point = {}
let maxIndex
let maxSum = 0
for(let i = 1 ; i <= a ; i++){
    for(let j = 1 ; j <= b ; j++){
        for(let k = 1 ; k <= c ; k++){
            const sum = i+j+k
            if(point[sum]){
                point[sum]++
            }
            else{
                point[sum] = 1
            }
        }
    }
}

for(key in point){
    if(maxSum < point[key]){
        maxSum = point[key]
        maxIndex = key
    }
}
console.log(maxIndex)