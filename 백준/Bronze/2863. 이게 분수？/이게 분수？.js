const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
const [a,b,c,d] = [...input[0].split(' ').map(Number), ...input[1].split(' ').map(Number)]
const arr = [a*d + b+c/(c*d), a*d + b+c/(b*d), a*d + b+c/(b*a), a*d + b+c/(a*c)]
const max = Math.max(...arr)

for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == max){
        console.log(i)
        break
    }
}