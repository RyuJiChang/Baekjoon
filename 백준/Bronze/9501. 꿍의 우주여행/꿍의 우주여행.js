let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let [amount, distance] = input[i].split(' ').map(Number)
    let count = 0
    for(let j = i+1 ; j <= i + amount ; j++){
        let [speed, fuel, fuelForHour] = input[j].split(' ').map(Number)
        if(distance <= speed * fuel / fuelForHour){
            count++
        }
    }
    result.push(count)
    i+= amount
}

console.log(result.join('\n'))