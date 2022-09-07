function solution(s) {
    var answer = '';
    let arr = s.split(' ').sort((a,b) => a-b)
    answer += arr.shift()
    answer += ' '
    answer += arr.pop()
    
    return answer;
}