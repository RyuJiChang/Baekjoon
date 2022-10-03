function solution(array, n) {
    let arr = array.map(el => [el,  Math.abs(el-n)]).sort((a,b) => a[0]-b[0])
    let min = Math.min(...array.map(el => Math.abs(el-n)))
    for(let i = 0 ; i <= arr.length ; i++){
        if(arr[i][1] === min){
            return arr[i][0]
        }
    }
}