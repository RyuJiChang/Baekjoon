const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let arrs = []
let result = []
for(let i = 1 ; i < input.length ; i+=3){
    let a = input.slice(i,i+3)
    for(let j = 0 ; j < 3 ; j++){
        if(j === 0){
            a[j] = Number(a[j])
        }
        else{
            a[j] = a[j].split(' ').map(Number)
        }
    }
    arrs.push(a)
}

for(let i = 0 ; i < arrs.length ; i++){
    let arr = arrs[i] 
    for(let j = 1 ; j < arr[0] ; j++){
        for(let k = 0 ; k < 2 ; k++){
            if(k === 0){
                arr[1][j] = Math.max(arr[1][j-1] , arr[2][j-1] + arr[1][j])
            }
            else{
                arr[2][j] = Math.max(arr[2][j-1] , arr[1][j-1] + arr[2][j])
            }
        }
    }
    result.push(Math.max(arr[1][arr[0]-1],arr[2][arr[0]-1]))
}

console.log(result.join('\n'))