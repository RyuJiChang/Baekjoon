const input = Number(require('fs').readFileSync('/dev/stdin').toString())
if(input == 1){
    console.log('*')
}
else{
    const str1 = '*' + ' *'.repeat(Math.floor((input-1) / 2))
    const str2 = ' *'.repeat(Math.floor((input) / 2))
    
    for(let i = 0 ; i < input ; i++){
        console.log(str1)
        console.log(str2)
    }
}