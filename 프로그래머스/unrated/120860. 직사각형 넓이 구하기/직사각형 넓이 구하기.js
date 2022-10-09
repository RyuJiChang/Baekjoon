function solution(dots) {
    let x = []
    let y = []
    for(let i = 0 ; i < 4 ; i++){
        let [a,b] = dots[i]
        x.push(a)
        y.push(b)
    }
    
    return (Math.max(...x) - Math.min(...x))*(Math.max(...y) - Math.min(...y))
}