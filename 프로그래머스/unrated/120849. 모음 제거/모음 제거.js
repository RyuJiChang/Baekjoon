function solution(my_string) {
    let answer = '';
    let str = 'aeiou'
    for(let i = 0 ; i < my_string.length ; i++){
        if(!str.includes(my_string[i])) answer += my_string[i]
    }
    return answer;
}