const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []
let count = 0n

const recurtion = (n, start, temp, end) => {
    if(n == 0){
        return
    }

    recurtion(n - 1, start, end, temp)
    result.push(start + ' ' + end)
    recurtion(n - 1, temp, start, end)
}
if(input <= 20){
    recurtion(input, '1', '2', '3')
    
    console.log(result.length)
    console.log(result.join('\n'))
}
else{
    let n = input
    while(n > 0){
        n--
        count = count * 2n + 1n
    }
    console.log(String(count))
}