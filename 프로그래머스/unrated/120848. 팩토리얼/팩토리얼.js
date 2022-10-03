function solution(n) {
    let factorial = 1
    let now = 1
    if(n === 1){
        return 1
    }
    for(let i = 2 ; i <= n ; i++){
        if(factorial*i > n){
            return i-1
        }
        else{
            factorial *= i
            now = i
        }
    }
    return now
}