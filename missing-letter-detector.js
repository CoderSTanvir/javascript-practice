function fearNotLetter(str){
  const alphabet="abcdefghijklmnopqrstuvwxyz"
  const startalph= alphabet.indexOf(str[0])
  
  for(let i=0; i<str.length; i++){
    if(alphabet[startalph+i]!=str[i]){
      return alphabet[startalph+i]

    }
  }

}

console.log(fearNotLetter("stvwx"))
