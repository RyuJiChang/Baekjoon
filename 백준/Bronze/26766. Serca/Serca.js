const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const result = []

for(let i = 0 ; i < input ; i++){
    result.push(` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     `)
}

console.log(result.join('\n'))