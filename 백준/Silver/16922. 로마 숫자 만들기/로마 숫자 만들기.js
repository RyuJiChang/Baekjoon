const n = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let arr = []
for(let i = 0 ; i <= n ; i++){
    for(let j = 0 ; j <= n ; j++){
        for(let k = 0 ; k <= n ; k++){
            for(let l = 0 ; l <=n ; l++){
                if((i+j+k+l) === n){
                 arr.push(i*1+j*5+k*10+l*50)  
                }
            }
        }
    }
}
console.log([...new Set(arr)].length)