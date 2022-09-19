function solution(n, t, m, p) {
    var answer = '';
    let str = ''
    for(let i = 0 ; i < t*m ; i++){
        str += i.toString(n)
    }
    for(let i = 0 ; i < t ; i++){
        answer += str[(i*m)+p-1]
    }
    return answer.toUpperCase();
}