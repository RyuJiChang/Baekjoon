function solution(s) {
    let arr = s.split('{{').join('').split('}}').join('').split('},{').join(',').split(',')
    let answer = []
    let obj = {}
    for(let i = 0 ; i < arr.length ; i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]] = 1
        }
        else{
            obj[arr[i]]++
        }
    }
    let arrs = []
    for(let key in obj){
        if(obj[key]){
            arrs.push([key,obj[key]])
        }
    }
    arrs = arrs.sort((a,b) => b[1] -a[1])
    for(let i = 0 ; i < arrs.length ; i++){
        answer.push(Number(arrs[i][0]))
    }
    return answer;
}