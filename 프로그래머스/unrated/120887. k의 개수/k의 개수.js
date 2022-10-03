function solution(i, j, k) {
    let str = ''
    for(let a = i ; a <= j ; a++){
        str += a
    }
    return str.split('').filter(el => el == k).length
}