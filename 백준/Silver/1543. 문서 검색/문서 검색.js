const [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let count = 0

for(let i = 0 ; i <= a.length - b.length ; i++){
    let check = true
    for(let j = 0 ; j < b.length ; j++){
        if(a[i+j] != b[j]){
            check = false
            break
        }
    }
    if(check){
        count++
        i += (b.length - 1) 
    }
}

console.log(count)