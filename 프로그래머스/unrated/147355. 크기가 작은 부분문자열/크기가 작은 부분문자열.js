function solution(t, p) {
    let answer = 0;
    let now = ''
    let num = Number(p)
    for(let i = 0 ; i <= t.length - p.length ; i++){
        if(Number(t.slice(i,i+p.length)) <= num) answer++
    }
    return answer;
}