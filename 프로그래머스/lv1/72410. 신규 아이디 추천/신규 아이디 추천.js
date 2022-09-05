function solution(new_id) {
    let str = new_id.toLowerCase()
    var answer = '';
    for(let i = 0 ; i < str.length ; i++){
        if(str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122){
            answer += str[i]
        }
        else if(str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57){
            answer += str[i]
        }
        else if(str[i].charCodeAt() === 45 || str[i].charCodeAt() === 46 || str[i].charCodeAt() === 95){
            answer += str[i]
        }
    }
    str = answer
    answer = ''
    for(let i = 0 ; i < str.length ; i++){
        if(str[i].charCodeAt() === 46 && str[i] === str[i-1]){
            continue
        }
        answer += str[i]
    }
    
    if(answer[0] === '.'){
        answer = answer.slice(1)
    }
    if(answer[answer.length-1] === '.'){
        answer = answer.slice(0,answer.length-1)
    }


    if(answer.length === 0){
        answer = 'a'
    }
    
    if(answer.length >= 16){
        answer = answer.slice(0,15)
        if(answer[14] === '.'){
            answer = answer.slice(0,14)
        }
    }
    if(answer.length === 1){
        answer = answer + answer + answer
    }
    if(answer.length === 2){
        answer += answer[1]
    }
    return answer;
}