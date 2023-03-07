const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

const result = []

const lcm = (x,y) => {
    const multiplied = x*y
    while (y > 0) {
        const temp = x
        x = y
        y = temp % y
    }
    return multiplied/x
}

const kaingCheck = (M,N,x,y) => {
    const lmcValue = lcm(M,N)
    for(let i = x ; i <= lmcValue ; i += M){
        if((i-1) % N +1 === y){
            return i
        }
    }
    return -1
}
for(let i = 1 ; i < input.length ; i++){
    const [M,N,x,y] = input[i].split(' ').map(Number)
    if(M > N){
        result.push(kaingCheck(M,N,x,y))
    }
    else{
        result.push(kaingCheck(N,M,y,x))
    }
}
console.log(result.join('\n'))