function solution(num, total) {
    let result = []
    if(total%num){
        for(let i = Math.ceil(total/num) - num/2 ;  i < Math.ceil(total/num) - num/2 + num ; i++){
            result.push(i)
        }
    }
    else{
        for(let i = total/num - Math.floor(num/2) ; i < total/num - Math.floor(num/2) + num ; i++){
            result.push(i)
        }
    }
    return result
}