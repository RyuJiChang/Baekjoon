function solution(s) {
    let answer = [];
    for(let i = 0 ; i < s.length ; i++){
        let check = -1
        for(let j = i-1 ; j >= 0 ; j--){
             if(s[j] === s[i]){
                 console.log(s[j],s[i])
                 check = i-j
                 break
             }
        }
        answer.push(check)
    }
    return answer;
}