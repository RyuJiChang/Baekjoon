function solution(balls, share) {
    let answer = 1;
    for(let i = balls ; i > balls-share ; i--){
        answer *= i
        answer /= (balls-i+1)
    }
    return answer;
}