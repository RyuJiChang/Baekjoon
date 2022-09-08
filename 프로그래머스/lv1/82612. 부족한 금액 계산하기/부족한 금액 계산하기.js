function solution(price, money, count) {
    let a = BigInt(price)
    let b = BigInt(money)
    let c = BigInt(count)
    let answer = b - (1n+c)*c*a/2n;    
    
    
    
    if(answer >= 0n){
        return 0
    }
    return Number(String(answer * -1n));
}