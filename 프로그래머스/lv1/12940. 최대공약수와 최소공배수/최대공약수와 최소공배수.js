function solution(n, m) {
    let before = Math.max(n,m)
    let now = Math.min(n,m)
    while(before%now){ 
        let some = now
        now = before%now
        before = some
    }
    return [now, n*m/now];
}