** start of script.js **

function chunkArrayInGroups(arr,num){
  const arrn=[]

  for(let i=0; i<arr.length; i+=num){
    arrn.push(arr.slice(i, i+num))
  }
  return arrn
}
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) )
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2))

** end of script.js **

