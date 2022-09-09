function solution(n) {
    var answer = n+1;

    for(let i = n+1 ; i.toString(2).split('0').join('') !== n.toString(2).split('0').join('')  ; i++){
        answer = i+1
    }
    return answer;
}
