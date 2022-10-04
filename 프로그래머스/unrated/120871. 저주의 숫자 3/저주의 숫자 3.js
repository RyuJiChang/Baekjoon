function solution(n) {
    let answer = 0;
    let now = 0
    while( now < n){
        answer++
        if(answer%3 === 0 || String(answer).split('').filter(el => el === '3').length){
            
        }
        else{
            now++
        }
    }
    return answer;
}