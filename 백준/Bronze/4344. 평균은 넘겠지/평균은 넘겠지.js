let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let result = []

for(let i = 1 ; i < input.length ; i++){
    let scoreArr = input[i].split(' ').map(Number)
    let avg = 0
    let over = 0
    for(let j = 1 ; j < scoreArr.length ; j++){
        avg += scoreArr[j]
    }
    avg /= scoreArr[0]
    for(let k = 1 ; k < scoreArr.length ; k++){
        if(scoreArr[k] > avg){
            over++
        }
    }
    // console.log((over/scoreArr[0]*100).toFixed(3))
    let strResult = String(Math.round(over*100000/scoreArr[0])) + '%'
    if(strResult === "0%"){
        result.push("0.000%")
    }
    else if(strResult.length === 6){
        result.push(strResult.slice(0,2) + '.' + strResult.slice(2))
    }
    else if(strResult.length === 5){
        result.push(strResult.slice(0,1) + '.' + strResult.slice(1))
    }
    else{
        result.push('0.' + strResult)
    }
}

console.log(result.join('\n'))

