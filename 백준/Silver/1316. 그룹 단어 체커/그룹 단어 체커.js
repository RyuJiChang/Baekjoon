const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let count = 0

for(let i = 1 ; i < input.length ; i++){
    let obj = {}
    let str = input[i]
    for(let j = 0 ; j < str.length ; j++){
        if(str[j] === str[j+1]){
            continue
        }
        else{
            if(obj[str[j]] !== 1){
                obj[str[j]] = 1
            }
            else{
                count--
                break
            }
        }
    }
    count++
}

console.log(count)