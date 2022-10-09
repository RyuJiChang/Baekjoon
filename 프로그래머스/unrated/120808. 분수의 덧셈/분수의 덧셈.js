function solution(denum1, num1, denum2, num2) {
    let a = denum1 * num2  + denum2 * num1
    let b = num1*num2
    
    let before = Math.max(a,b)
    let now = Math.min(a,b)
    
    while( now > 0){
        let xxxx = before
        before = now
        now = xxxx % now
            
    }
    return [a/before,b/before]
}