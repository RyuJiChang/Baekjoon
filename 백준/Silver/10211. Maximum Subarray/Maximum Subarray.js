const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1)

let result = []

function findMax(arr) {
    let max = -Infinity
    let maxNow = 0
    for(let i = 0 ; i < arr.length ; i++){
        maxNow = Math.max(arr[i] , maxNow + arr[i])
        max = Math.max(maxNow , max)
        if(maxNow <0){
            maxNow = 0
        }
    }    
    return max
}

for(let i = 1 ; i < input.length ; i += 2){
    result.push(findMax(input[i].split(' ').map(Number)))

}

console.log(result.join('\n'))