const [n, f] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
const lastNum = Math.floor(n / 100) * 100

for(let i = 0 ; i <= 100 ; i++){
    if((lastNum + i) % f == 0){
        console.log(String(i).padStart(2,'0'))
        break
    }
}