function solution(hp) {
    let sum = Math.floor(hp/5)
    let left = hp%5
    
    return (sum + Math.floor(left/3) + left%3)
}