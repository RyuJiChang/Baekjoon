function solution(s) {
    let answer = 0;
    let arr = []
    for(let i = 0 ; i < s.split(' ').length ; i++){
        if(s.split(' ')[i] === 'Z'){
            arr.pop()
        }
        else{
            arr.push(Number(s.split(' ')[i]))
        }
    }
    return (arr.length === 0 ? 0 : arr.reduce((a,b) => a+b))
}