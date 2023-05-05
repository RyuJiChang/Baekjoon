const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())

let count = 0

for(let i = 1 ; (i**2 + i)/2 <= input ; i++){
    if((input - (i**2 + i)/2) % i === 0){
        count++
    }
}

console.log(count)