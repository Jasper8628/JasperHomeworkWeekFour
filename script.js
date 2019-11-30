

var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var buttonThree = document.querySelector("#button-three");
var buttonFour = document.querySelector("#button-four");
var questionIndex=0;

var corretAnswer = questionSetOne[questionIndex].answer;
function displayQuestion(index) {
   
  buttonTwo.textContent = questionSetOne[index].choices[1];
  buttonThree.textContent = questionSetOne[index].choices[2];
  buttonFour.textContent = questionSetOne[index].choices[3];
  buttonOne.textContent = questionSetOne[index].choices[0];
  corretAnswer=questionSetOne[index].answer;

}

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
}

buttonOne.addEventListener("click", function (event) {
  checkAnswer(buttonOne, corretAnswer);
});
buttonTwo.addEventListener("click", function (event) {
  checkAnswer(buttonTwo, corretAnswer);
});
buttonThree.addEventListener("click", function (event) {
  checkAnswer(buttonThree, corretAnswer);
});
buttonFour.addEventListener("click", function (event) {
  checkAnswer(buttonFour, corretAnswer);
});
displayQuestion(0);





console.log(corretAnswer);
console.log(typeof corretAnswer);





