** start of script.js **

function repeatStringNumTimes(str, num){
  let repeated=""
  
  if(num>0){
    for(let i=0; i<num; i++){
       repeated+=str
    }
  }
  else{
    return ""
  }
return repeated
}

console.log(repeatStringNumTimes("abc", 0))



** end of script.js **

