const quizDB = [
  {
     question: "Q1: What is the full form of HTML?",
     a:"hypertool makeup language",
     b:"hypertext makeup language",
     c:"heytext markup language",
     d:"hypertext markup language",
     ans: "ans4"
  },
  {
     question: "Q2: What is the full form of CSS?",
     a:"cascading style sheets",
     b:"cascading style sheep",
     c:"cartoon style sheets",
     d:"cascading super sheets",
     ans: "ans1"
  },
  {
     question: "Q3: What is the full form of JS?",
     a:"javasuper",
     b:"javashoes",
     c:"javascript",
     d:"justscript",
     ans: "ans3"
  },
  {
     question: "Q4: What is the full form of API?",
     a:"application programming internet",
     b:"application programming interface",
     c:"android programming interface",
     d:"application paragraphing interface",
     ans: "ans2"
  }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
 
let questionCount = 0;
let score= 0;

const loadQuestion = () =>{

     const questionList = quizDB[questionCount];

     question.innerText = questionList.question;

     option1.innerText = questionList.a;
     option2.innerText = questionList.b;
     option3.innerText = questionList.c;
     option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
   let answer;

   answers.forEach((curAnsElem) =>{
    if(curAnsElem.checked){
       answer = curAnsElem.id; 
  }
});
  return answer;
};

const deselectAll = () =>{
  answers.forEach((curAnsElem)=> curAnsElem.checked = false);
}

submit.addEventListener('click',()=>{
    const checkedAnswer = getCheckAnswer();
   console.log(checkedAnswer);

   if(checkedAnswer === quizDB[questionCount].ans){
     score++;
 };
    questionCount++;

    deselectAll();    

   if(questionCount < quizDB.length){
     loadQuestion();
}else{
    showScore.innerHTML = `
     <h3>You scored ${score}/${quizDB.length}</h3>
     <button class="btn" onclick="location.reload()">Play Again</button>
     `;

    showScore.classList.remove('scoreArea');
}
});