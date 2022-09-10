function solution(n){
    let ans = 0;
    let num = n
    while(num>1){
        if(num%2){
            ans++
            num = (num-1)/2
        }
        else{
            num /= 2
        }
    }
    return (num ? ans+1 : ans);
}