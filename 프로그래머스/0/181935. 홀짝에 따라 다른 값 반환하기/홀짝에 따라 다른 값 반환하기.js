function solution(n) {
    let answer = 0
    for(let i = n % 2 ; i <= n ; i+=2){
        answer += (i % 2) ? i : i**2
    }
    return answer;
}