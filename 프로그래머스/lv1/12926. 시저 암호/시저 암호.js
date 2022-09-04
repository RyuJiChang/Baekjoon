function solution(s, n) {
    var answer = '';
    
    for(let i = 0 ; i < s.length ; i++){
        if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
            answer += String.fromCharCode(((s.charCodeAt(i)+n-97)%26)+97)
        }
        else if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            answer += String.fromCharCode(((s.charCodeAt(i)+n-65)%26)+65)
        }
        else{
            answer += ' '
        }
    }
        
    return answer;
}