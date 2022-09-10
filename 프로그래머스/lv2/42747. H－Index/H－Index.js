function solution(citations) {
    let arr = citations.sort((a,b) => a-b)
    let num = citations.length
    var answer = 0;
    for(let i = num-1 ; i >= 0 ; i--){
        for(let j = 0 ; j < num-i ; j++){
            if(arr[j] >= i+1){
                return i+1
            }
                
        }
    }
    return answer;
}