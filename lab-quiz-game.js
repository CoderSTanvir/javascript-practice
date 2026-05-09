** start of script.js **

const questions=[];
const q1={
  category:"easy",
  question:"what is the color of sky?",
  choices:["blue", "yellow","green"],
  answer:"blue"
}

const q2={
  category:"hard",
  question:"what is the color of ocean?",
  choices:["blue", "yellow","green"],
  answer:"blue"
}

const q3={
  category:"easy",
  question:"what is the color of a tree?",
  choices:["blue", "yellow","green"],
  answer:"green"
}

const q4={
  category:"easy",
  question:"what is the color of tiger?",
  choices:["blue", "yellow","green"],
  answer:"yellow"
}

const q5={
  category:"easy",
  question:"what is the color of lion?",
  choices:["blue", "dark yellow","green"],
  answer:"dark yellow"
}

questions.push(q1,q2,q3,q4,q5);
console.log(questions);

function getRandomQuestion(questions){
  const randomNumber=Math.floor(Math.random()*questions.length)
  return questions[randomNumber]
 
}

console.log(getRandomQuestion(questions))

function getRandomComputerChoice(choices){
  const randomNumber=Math.floor(Math.random()*choices.length)
  return choices[randomNumber]
}

function getResults(question,compChoice){
  if (question.answer===compChoice){
    return "The computer's choice is correct!"
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}


** end of script.js **

