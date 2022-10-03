function solution(cipher, code) {
    let answer = '';
    let str = ' '+cipher
    for(let i = code ; i <= cipher.length ; i += code){
        answer += str[i]        
    }
    return answer
}