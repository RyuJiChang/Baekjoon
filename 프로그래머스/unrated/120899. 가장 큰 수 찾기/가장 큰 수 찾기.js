function solution(array) {
    let a = [...array].sort((a,b) => b-a)[0]
    return [a, array.indexOf(a)]
}