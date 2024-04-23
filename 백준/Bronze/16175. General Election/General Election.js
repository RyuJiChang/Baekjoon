const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number))
for(let i = 1 ; i < input.length ; i++){
    const [m, t] = input[i]
    const mapChecker = {}
    let index = 0
    let max = 0
    for(let j = i + 1 ; j <= i + t ; j++){
        for(let k = 0 ; k < input[j].length ; k++){
            if(mapChecker[k]){
                mapChecker[k] += input[j][k]
            } 
            else{
                mapChecker[k] = input[j][k]
            }
        }
    }
    for(let key in mapChecker){
        if(mapChecker[key] > max){
            max = mapChecker[key]
            index = key
        }
    }
    i += t
    console.log(1 + Number(index))
}
