const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = ''
for(let i = 0 ; i < input ; i++){
    for(let j = 1 ; j < input-i ; j++){
        result += ' '
    }
    for(let k = 0 ; k < i+1 ; k++){
        result += `*`
        if(k != 0){
            result += '*'
        }
    }
    console.log(result)
    result = ''
}