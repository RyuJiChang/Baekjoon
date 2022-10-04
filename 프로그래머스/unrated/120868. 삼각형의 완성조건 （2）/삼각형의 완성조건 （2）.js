function solution(sides) {
    let a = Math.min(...sides)
    let b = Math.max(...sides)
    let answer = 0
    for(let i = 1 ; i < a+b ; i++){
        let arr = [a,b,i].sort((a,b) => a-b)
        let [q,w,e] = arr
        if(q+w > e){
            answer++
        }
    }
    return answer;
}