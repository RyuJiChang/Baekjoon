function solution(strings, n) {
    var answer = strings.sort().sort((a, b) => a[n] < b[n] ? -1 : 1)
    return answer;
}