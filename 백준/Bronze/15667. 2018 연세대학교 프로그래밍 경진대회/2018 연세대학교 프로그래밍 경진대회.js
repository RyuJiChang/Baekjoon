const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

for(let i = 1 ; i <= 100 ; i++){
    const sum = i**2 + i + 1
    if(input === sum){
        console.log(i)
        break
    }
}