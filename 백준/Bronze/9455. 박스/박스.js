const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
const cal = (x) =>{
    let sum = 0
    for(let i = 1 ; i <= x ; i++){
        sum += i
    }
    return sum
}

for(let i = 1 ; i < input.length ; i++){
    const [x,y] = input[i]
    let result = 0

    for(let k = 0 ; k < y ; k++){
        let count = 0
        let sum = 0
        for(let j = i+1 ; j <= i+x ; j++){
            if(input[j][k]){
                count++
                sum += i + x - j + 1
            }
        }
        result += (sum - cal(count))
    }

    console.log(result)
    i += x
}