function solution(n) {
    var answer = Number(String(n).split('').map(Number).sort((a,b) => b - a).join(''))
    return answer;
}