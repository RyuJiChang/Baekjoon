let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
let loopChecker = true
const primeCheck = (num) => {
    let isPrime = true
    for(let i = 2 ; i**2 <= num ; i++){
        if(num % i == 0){
            isPrime = false
            break
        }
    }
    return isPrime
}

while(loopChecker){
    if(primeCheck(input) == false){
        console.log(input)
        loopChecker = false
    }
    input++
}