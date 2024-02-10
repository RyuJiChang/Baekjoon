const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

for(let i = input ; i <= 1000000000 ; i++){
    let sum = 0
    let str = String(i)
    for(let j = 0 ; j < str.length ; j++){
        sum += Number(str[j])
    }
    if(i % sum == 0){
        console.log(i)
        break
    }
}
