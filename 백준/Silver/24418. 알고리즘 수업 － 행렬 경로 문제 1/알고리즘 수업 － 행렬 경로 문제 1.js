const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[0])

function facto(n){
    let result = 1n
    for(let i = 2 ; i <= n ; i++){
        result *= BigInt(i)
    }
    return result 
}
let result = [String(facto(input*2)/facto(input)/facto(input)) , String(input*input)]
console.log(result.join(' '))