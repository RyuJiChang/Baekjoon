const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim())
const heart = ` @@@   @@@ 
@   @ @   @
@    @    @
@         @
 @       @ 
  @     @  
   @   @   
    @ @    
     @     `.split('\n')
const result = []

for(let i = 0 ; i < heart.length; i++){
 const str = []
 for(let j = 0 ; j < input ; j++){
  str.push(heart[i])
 }
 result.push(str.join(' '))
}

console.log(result.join('\n'))