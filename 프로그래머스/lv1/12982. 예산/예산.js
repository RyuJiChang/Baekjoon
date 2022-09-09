function solution(d, budget) {
    var answer = 0;
    let arr = d.sort((a,b) => a-b)
    for(let i = 0 ; i < d.length ; i++){
        if(budget - arr[i] >= 0){
            budget -= arr[i]
            answer++
        }
    }
    return answer;
}