let v = prompt('insert a value')
let b1 = parseInt(prompt('base of this value'))
let b2 = parseInt(prompt('base that you wanna convert'))

function bs2bs(v,b1,b2) {
 let b10=0
 let v2= []
 let v22=[]
 const NB = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 'A',
  '11': 'B',
  '12': 'C',
  '13': 'D',
  '14': 'E',
  '15': 'F',
  'a': 10,
  'b': 11,
  'c': 12,
  'd': 13,
  'e': 14,
  'f': 15}
 
 for (let i = 0; i < v.length; i++) {
  b10+=(NB[(v[v.length-1-i]).toLowerCase()])*(b1**i)
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
