const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const priceForMM = input[0].split(' ').map(Number)[1]
let bedroom = 0
let balcony = 0
let sum = 0

for(let i = 1 ; i < input.length ; i++){
    const [mm, name] = input[i].split(' ')
    sum += Number(mm)
    if(name === "balcony"){
        balcony += Number(mm)
    }
    else if(name === "bedroom"){
        bedroom += Number(mm)
    }
}

console.log(sum)
console.log(bedroom)
console.log(Math.round((sum-(balcony/2))*priceForMM*1000000)/1000000)