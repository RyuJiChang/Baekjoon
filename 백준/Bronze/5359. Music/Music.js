const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i+=2){
    let count = 0
    let [lengths, interval, gap] = input[i].split(' ').map(Number)
    let dataSet = input[i+1].split(' ').map(Number)
    for(let j = interval ; j <= dataSet.length ; j++){
        let max = Math.max(...dataSet.slice(j-interval, j))
        let min = Math.min(...dataSet.slice(j-interval, j))
        if(max-min <= gap){
            count++
        }
    }
    result.push(count)
}

console.log(result.join('\n'))