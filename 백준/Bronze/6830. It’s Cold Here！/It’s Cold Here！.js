const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = ''
let coldest = 200

for(let i = 0 ; i < input.length ; i++){
    const [city, temper] = input[i].split(' ')
    if(Number(temper) < coldest){
        result = city
        coldest = Number(temper)
    }
}

console.log(result)