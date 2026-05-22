** start of script.js **

function findLongestWordLength(string){
  const words= string.split(" ")
let max = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].length > max) {
    max = words[i].length
  }
}
return max
}
const string = "the quick"

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog") )


** end of script.js **

