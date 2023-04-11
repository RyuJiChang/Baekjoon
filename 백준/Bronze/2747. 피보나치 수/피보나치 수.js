const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const fibo = [0,1]

for(let i = 2 ; i <= input ; i++){
    fibo[i] = fibo[i-1] + fibo[i-2]
}

console.log(fibo[input])