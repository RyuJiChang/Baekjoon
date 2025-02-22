const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let count = 0

for(let i = input - 2 ; i >= Math.floor(input/3) ; i--){
    for(let j = input - i - 1 ; j >= Math.floor(i/2) ; j--){
        const k = input - i - j 
        if(k <= j && j <= i && j+k > i){
            count++
        }
    }
} 

console.log(count)