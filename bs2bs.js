let v = prompt('insert a value')
let b1 = parseInt(prompt('base of this value'))
let b2 = parseInt(prompt('base that you wanna convert'))

function bs2bs(v,b1,b2) {
 let b10=0
 let v2= []
 let v22=[]
 const NB = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
 
 for (let i = 0; i < v.length; i++) {
  b10+=(parseInt(v[v.length-1-i]))*(b1**i)
 }
 if(b2!=10){
  while(b10!=0){
   v2+=NB[(b10%b2)]
   b10= Math.floor(b10/b2)}
  
  for (let i = 0; i < v2.length; i++) {
   v22+=v2[v2.length-1-i]}
   console.log(v22)} else {
   console.log(b10)
 }
}

bs2bs(v,b1,b2);
stp= prompt("Stop? Yes(Y) or No(N)")
stp= stp.toLowerCase()
while (stp!="y"){
 v = prompt('insert a value')
 b1 = parseInt(prompt('base of this value'))
 b2 = parseInt(prompt('base that you wanna convert'))
 bs2bs(v,b1,b2);
 stp= prompt("Stop? Yes(Y) or No(N)")
 stp= stp.toLowerCase()
}