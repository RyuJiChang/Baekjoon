let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let arr = input[i].split(' ').map(Number)
    let ODD = 0
    let EVEN = 0
    for(let j = 1 ; j < arr.length ; j++){
        if(arr[j] % 2){
            ODD += arr[j]
        }
        else{
            EVEN += arr[j]
        }
    }
    if(ODD > EVEN){
        result.push("ODD")
    }
    else if(EVEN > ODD){
        result.push("EVEN")
    }
    else{
        result.push("TIE")
    }
}
console.log(result.join('\n'))