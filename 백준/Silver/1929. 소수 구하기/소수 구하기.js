const [startNum, endNum] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let primeArr = [0,0]

for(let i = 2 ; i <= endNum ; i++){
    if(i < startNum){
        primeArr.push(0)
    }
    else{
        primeArr.push(i)
    }
}
for(let i = 2 ; i <= Math.ceil(Math.sqrt(endNum)) ; i++){
    for(let j = 2 ; j*i <= endNum ; j++){
        primeArr[i*j] = 0
    }
}


console.log(primeArr.filter(el => el).join('\n'))