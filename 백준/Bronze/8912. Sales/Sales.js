const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 2 ; i < input.length ; i+=2){
    const arr = input[i].split(' ').map(Number)
    let sum = 0
    for(let j = 1 ; j < arr.length ; j++){
        for(let k = 0 ; k < j ; k++){
            if(arr[j] >= arr[k]){
                sum++
            }
        }
    }
    console.log(sum)
}