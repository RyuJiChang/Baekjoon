function solution(s) {
    var answer = [];
    let count = 0
    let zero = 0
    let arr = s
    while(arr !== '1'){
        count++
        let newArr = ''
        for(let i = 0 ; i < arr.length ; i++){
            if(arr[i] === '0'){
                zero++
            }
            else{
                newArr += '1'
            }
        }
        arr = (newArr.length).toString(2)
    }
        
        
    return [count, zero];
}