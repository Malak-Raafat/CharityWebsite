document.documentElement.style.setProperty(
  "--color",
  localStorage.getItem("backGroundColor") || "#fff"
);

const colors = document.getElementsByClassName("colors");
let i;
for (j = 0; j < colors.length; j++) {
  colors[j].addEventListener("click", changecolor);
}
function changecolor() {
  var color = this.getAttribute("data-color");
  //console.log("color will saved in local", color);
  localStorage.setItem("backGroundColor", color);
  //localStorage.setItem("lastname", "Smith");
  var last = localStorage.getItem("backGroundColor");
  //console.log("color in local storage  ", last);
  document.documentElement.style.setProperty("--color", last);
}

// localStorage.removeItem("backGroundColor");
//Question bank
var questionBank= [
  {
      question : 'your gender?',
      option : ['Male','Female'],
      answer : 'Male'
  },
  {
      question : 'Your age is',
      option : ['under 40','above 40'],
      answer : 'under 40'
  },
  {
      question : 'Have you ever had any heart issues?',
      option : ['Yes','No'],
      answer : 'No'
  },
  {
      question : 'Have you ever travelled alone?',
      option : ['Yes','No'],
      answer : 'Yes'
  },
  
  {
      question : 'Can you handle children?',
      option : ['Yes','No'],
      answer : 'Yes'
  },
  {
      question : 'Do you serve your family?',
      option : ['Yes','No'],
      answer : 'Yes'
  },
  {
      question : 'Can you survive for time without internet?',
      option : ['Yes','No'],
      answer : 'Yes'
  },
  {
      question : 'Is money your first priority?',
      option : ['Yes','No'],
      answer : 'No'
  },
  

]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var j=0;
var score= 0;

//function to display questions
function displayQuestion(){
  for(var a=0;a<span.length;a++){
      span[a].style.background='none';
  }
  question.innerHTML= 'Q.'+(j+1)+' '+questionBank[j].question;
  option0.innerHTML= questionBank[j].option[0];
  option1.innerHTML= questionBank[j].option[1];
  stat.innerHTML= "Question"+' '+(j+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
  if(e.innerHTML===questionBank[j].answer && score<questionBank.length)
  {
       score= score+1;
      
  }
  
  setTimeout(nextQuestion,300);
}

//function to display next question
function nextQuestion(){
  if(j<questionBank.length-1)
  {
      j=j+1;
      displayQuestion();
  }
  else{
      if(score==8){
          points.innerHTML= "You can volunteer in building roofs for houses in Upper Egypt";
      }
      else if (score >= 6 && score != 8){
          points.innerHTML= "you can serve old people in elderly home";
      }
      else if (score >=3 && score < 6){
          points.innerHTML= "You can volunteer in deleviring blankets for homeless people in streets ";
      }
      else if (score < 3){
          points.innerHTML="you can give us money and your old clothes"
      }

      quizContainer.style.display= 'none';
      scoreboard.style.display=
       'block'
  }
}

//click events to next button
next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
  location.reload();
}

//function to check Answers
function checkAnswer(){
  var answerBank= document.getElementById('answerBank');
  var answers= document.getElementById('answers');
  answerBank.style.display= 'block';
  scoreboard.style.display= 'none';
  for(var a=0;a<questionBank.length;a++)
  {
      var list= document.createElement('li');
      list.innerHTML= questionBank[a].answer;
      answers.appendChild(list);
  }
}


displayQuestion();