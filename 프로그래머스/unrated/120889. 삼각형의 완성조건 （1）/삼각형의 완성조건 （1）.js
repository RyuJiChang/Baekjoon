function solution(sides) {
    let [a,b,c] = sides.sort((a,b) => a-b)
    return (a+b > c ? 1 : 2)
}