function solution(rsp) {
    let answer = '';
    for(let i = 0 ; i < rsp.length ; i++){
        if(rsp[i] === '0') answer += '5'
        if(rsp[i] === '2') answer += '0'
        if(rsp[i] === '5') answer += '2'
            
    }
    return answer;
}