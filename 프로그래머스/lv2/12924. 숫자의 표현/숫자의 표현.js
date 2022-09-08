function solution(n) {
    var answer = 0;
    // let max
    // for(let i = Math.floor(Math.sqrt(2*n)) ; i < n ; i++){
    //     if(((i*i)+i)/2 > n){
    //         max = i-1
    //         break
    //     }
    // }

    for(let i = 1; n-((i*(i-1))/2) > 0; i++){
        if((n-((i*(i-1))/2))% i == 0){
            answer++;
        }            
      }
    return answer;
}