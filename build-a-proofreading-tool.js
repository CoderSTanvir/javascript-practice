function isPalindrome(word){
  let reverseWord=""

  for(let i=0; i<word.length; i++){
    reverseWord+=word[word.length-i-1]
  }
  if(reverseWord.toLowerCase()==word.toLowerCase()){
    return true
  }
  else{
    return false
  }
}

function findPalindromeBreaks(words){
  const breakArray=[]
  
  for (let i=0; i<words.length; i++){
    let palindromeBreak=isPalindrome(words[i])

    if(palindromeBreak==false){
      breakArray.push(i)
    }
    
  }
  return breakArray
}

console.log(findPalindromeBreaks(["the", "cat", "sat", "the", "cat"]))


function findRepeatedPhrases(words,phraseLength){
  const repeatedPhrase=[]
  
  if(phraseLength>=words.length){
    return []
  }
  
  for(let i=0; i<=words.length-phraseLength; i++){
    const slicedWords=words.slice(i, i+phraseLength)

    const phraseString=slicedWords.join(" ")

    let count = 0

    for(let j=0; j<=words.length-phraseLength;j++){
      const slicedWord2=words.slice(j, j+phraseLength)
      const compareWord=slicedWord2.join(" ")
    
      if(compareWord==phraseString){
        count++
      }
    }
  if(count>1){
    repeatedPhrase.push(i)
  }
  
  }

  return repeatedPhrase
    
}
const words = ["the", "cat", "sat", "the", "cat"];
const phraseLength = 2;
console.log(findRepeatedPhrases(words, phraseLength))


function analyzeTexts(texts, phraseLength){
  
  const result=[]
  if(texts.length==0){
    return result
  }

  for(let i=0; i<texts.length; i++){
    const repeatedPhrases=findRepeatedPhrases(texts[i], phraseLength)
    const palindromeBreaks=findPalindromeBreaks(texts[i])

    const obj={
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    }
    result.push(obj)
  }
  return result

}

const texts = [
  ["the", "cat", "sat", "the", "cat"], // Array 1
  ["racecar", "hello", "kayak"]        // Array 2
];



console.log(analyzeTexts(texts,phraseLength))
