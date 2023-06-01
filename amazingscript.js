var questions = [
    { question: '5 + 2', answer: '7' },
    { question: '10 - 4', answer: '6' },
    { question: '3 * 6', answer: '18' },
    { question: '8 / 2', answer: '4' },
    { question: '9 + 3', answer: '12' }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  var questionElement = document.getElementById('question');
  var answerElement = document.getElementById('answer');
  var resultElement = document.getElementById('result');
  
  function displayQuestion() {
    questionElement.textContent = questions[currentQuestion].question;
    answerElement.value = '';
    resultElement.textContent = '';
  }
  
  function checkAnswer() {
    var userAnswer = answerElement.value;
    if (userAnswer === questions[currentQuestion].answer) {
      resultElement.textContent = 'Correct!';
      score++;
    } else {
      resultElement.textContent = 'Wrong!';
    }
    
    currentQuestion++;
    
    if (currentQuestion === questions.length) {
      questionElement.textContent = 'Quiz complete! Your score: ' + score + '/' + questions.length;
      answerElement.style.display = 'none';
      document.getElementById('submit-btn').style.display = 'none';
    } else {
      displayQuestion();
    }
  }
  
  displayQuestion();
  
  document.getElementById('submit-btn').addEventListener('click', checkAnswer);