function solution(n) {
    var answer = 0;
    if(Math.round(Math.sqrt(n)) === Math.sqrt(n)){
        answer = (Math.sqrt(n)+1)**2
    }
    else{
        answer = -1
    }
    return answer;
}