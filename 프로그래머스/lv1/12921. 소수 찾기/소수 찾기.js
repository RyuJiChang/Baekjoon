function solution(n) {
    var answer = 0;
    let dp = [0,0]
    for(let i = 2 ; i <= n ; i++){
        dp[i] = i
    }
    for(let i = 2 ; i <=n ; i++){
        if(dp[i] !== 0){
            answer++
            let now = i
            while(now < n ){
                now += i
                dp[now] = 0
            }
        }
    }
    
    return answer;
}