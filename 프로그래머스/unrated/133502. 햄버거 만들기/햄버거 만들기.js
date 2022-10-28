function solution(ingredient) {
    let str = ''
    let count = 0
    let arr = ['22', '33', '13', '32']
    for(let i = 0 ; i < ingredient.length ; i++){
        str += ingredient[i]
        if(str.slice(-4) === '1231'){
            str = str.slice(0,str.length-4)
            count++
        }
        if(arr.includes(str.slice(-2))){
            str = ''
        }
    }
    return count
    
    
    
    // let str = ingredient.join('')
    // let srtR = ingredient.reverse().join('')
    // let stop = 1
    // let count = 0
    // let stopR = 1
    // let countR = 0
    // while(stop && str.length > 3){
    //     stop = 0
    //     if(str.indexOf('1231') !== -1){
    //         stop = 1
    //         let nums = str.length
    //         str = str.split('1231').join('')
    //         count += (nums-str.length)/4
    //     }
    // }
    // while(stopR && srtR.length > 3){
    //     stopR = 0
    //     if(srtR.indexOf('1321') !== -1){
    //         stopR = 1
    //         let nums = srtR.length
    //         srtR = srtR.split('1321').join('')
    //         countR += (nums-srtR.length)/4
    //     }
    // }
    // return Math.max(count, countR)
}