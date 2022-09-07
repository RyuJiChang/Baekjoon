function solution(s){
    var answer = false;
    let p = 0
    let y = 0
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] === 'P' || s[i] === 'p'){
            p++
        }
        if(s[i] === 'Y' || s[i] === 'y'){
            y++
        }
    }
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    if(p === y){
        answer = true
    }
    
    return answer;
}