** start of script.js **

function mutation(arr){
  
  for(let i=0; i<arr[1].length; i++){
  if(arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase())==-1){
    return false
    }

  }
 return true
}

console.log(mutation(["hello", "Hello"]))
const arr=["hello", "hey"]
console.log(arr[1].indexOf(arr[0][2]))

** end of script.js **

