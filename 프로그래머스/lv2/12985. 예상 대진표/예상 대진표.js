function solution(n,A,B){
    let answer = 1
    let a = Math.min(A,B)
    let b = Math.max(A,B)
    while(a+1 !== b || b%2){
        answer++
        if(a%2){
            a = (a+1)/2
        }
        else{
            a /= 2
        }
        if(b%2){
            b = (b+1)/2
        }
        else{
            b /= 2
        }
    }

    return answer;
}