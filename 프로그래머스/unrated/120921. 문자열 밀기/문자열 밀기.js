function solution(A, B) {
    let str = A.split('')
    let num = 0
    for(let i = 0 ; i < A.length ; i++){
        if(str.join('') === B){
            return num
        }
        str.unshift(str.pop())
        num++
    }
    return -1;
}