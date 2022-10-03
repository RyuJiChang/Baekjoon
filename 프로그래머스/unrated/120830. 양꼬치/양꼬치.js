function solution(n, k) {
    let num = Math.floor(n/10)
    if(num > k){
        return n*12000
    }
    else{
        return n*12000 +(k-num)*2000
    }
}