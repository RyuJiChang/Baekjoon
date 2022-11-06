function solution(a, b, n) {
    let answer = 0;
    let bottle = n
    while(bottle >= a){
        let num = Math.floor(bottle/a)
        answer += num * b
        bottle = bottle%a + num*b
    }
    
    return answer
}