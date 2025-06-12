const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number).sort((a,b) => a-b))

for(let i = 1 ; i < input.length ; i+=2){
    const arr = input[i]
    let min = Infinity
    for(let j = 0 ; j < arr.length - 1 ; j++){
        min = Math.min(arr[j+1] - arr[j], min)
    }
    console.log(min)
}
