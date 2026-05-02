** start of script.js **

function truncateString(string, num){
  if(string.length<=num){ 
    return string;
  }
  else{
    return string.slice(0,num)+"...";
  }
}
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-", 1));

console.log(truncateString("Absolutely Longer", 2));

** end of script.js **

