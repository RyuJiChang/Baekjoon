const [startNum, endNum] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

let primeArr = []

for(let i = 0 ; i <= endNum ; i++){
    if(i < startNum || i === 0 || i === 1){
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