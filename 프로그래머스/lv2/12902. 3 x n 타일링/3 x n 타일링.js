function solution(n) {
    let dp = [1,3,11]
    if(n%2){
        return 0
    }
    for(let i = 3 ; i <= n/2 ; i++){
        dp[i] = (dp[i-1]*4 - dp[i-2]+1000000007)%1000000007
    }
    return dp[n/2]
}