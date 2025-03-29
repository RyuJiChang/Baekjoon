const [x, y] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
const sum = []
const result = []

for(let i = 1 ; i <= x ; i++){
    for(let j = 1 ; j <= y ; j++){
        if(sum[i+j]){
            sum[i+j]++
        }
        else{
            sum[i+j] = 1
        }
    }
}

const max = Math.max(...sum.filter(el => el))

for(let i = 0 ; i < sum.length ; i++){
    if(sum[i] == max){
        result.push(i)
    }
}


console.log(result.join('\n'))