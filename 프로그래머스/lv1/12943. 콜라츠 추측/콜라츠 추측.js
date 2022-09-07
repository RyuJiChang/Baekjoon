function solution(num) {
    var answer = 0;
    while(answer < 500 && num !== 1){
        answer++
        if(num % 2){
            num = num*3 +1
        }
        else{
            num /= 2
        }
    }
    if(answer === 500){
        answer = -1
    }
    return answer;
}