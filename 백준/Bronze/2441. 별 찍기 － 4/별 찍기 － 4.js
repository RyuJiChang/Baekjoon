const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let result = ''
for(let i = 0 ; i < input ; i++){
    for(let j = 0 ; j < i ; j++){
        result += ' '
    }
    for(let k = 0 ; k < input-i ; k++){
        result += `*`
    }
    console.log(result)
    result = ''
}