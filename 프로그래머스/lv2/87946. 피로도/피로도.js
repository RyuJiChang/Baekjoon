function solution(k, dungeons) {
    var answer = []
    let arr = []
    let max = 0
    for(let i = 0 ; i < dungeons.length ; i++){
        arr.push(1)
    }
    function recurtion(sum,left,n,arr){
        if(n === 0){
            max = Math.max(max,sum)
            return
        }
        for(let i = 0 ; i < dungeons.length ; i++){
            if(arr[i]){
                let c = [...arr]
                c[i] = 0
                let [a,b] = dungeons[i]
                if(a <= left){
                    recurtion(sum+1,left-b,n-1,c)
                }
                else{
                    recurtion(sum,left,n-1,c)
                }
            }
        }
        
    }

    recurtion(0,k,dungeons.length,arr)
    
    return max;
}