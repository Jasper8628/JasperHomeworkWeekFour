

var questionIndex = 0;
var theAnswer;
var question = document.querySelector("#question");
function displayQuestion(questionIndex) {
  var createQuestion=document.createElement("p");
  createQuestion.textContent=questionSetOne[questionIndex].title;
  question.appendChild(createQuestion);
  for (var i = 0; i < questionSetOne[questionIndex].choices.length; i++) {
    var createButton = document.createElement("button");
    //console.log(questionSetOne[questionIndex].choices);
    //console.log(questionSetOne[questionIndex].choices.length);
    createButton.textContent = questionSetOne[questionIndex].choices[i];
    createButton.setAttribute("class","choice");
    question.appendChild(createButton);
    
  }
  theAnswer=questionSetOne[questionIndex].answer;
  console.log(theAnswer)
  

}

/*
var corretAnswer = questionSetOne[questionIndex].answer;
function displayQuestion(index) {

  buttonTwo.textContent = questionSetOne[index].choices[1];
  buttonThree.textContent = questionSetOne[index].choices[2];
  buttonFour.textContent = questionSetOne[index].choices[3];
  buttonOne.textContent = questionSetOne[index].choices[0];
  corretAnswer=questionSetOne[index].answer;

} */
/* 
function checkAnswer(buttonNumber, answer) {
  event.preventDefault();
  if (buttonNumber.textContent === answer) {
    alert("you win");
    questionIndex=questionIndex+1;
    displayQuestion(questionIndex);

  }
  else {
    alert("wrong answer");
  }
} */
displayQuestion(0);







