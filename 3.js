const totalQuestions = 5; // Total number of questions
let currentQuestion = 1;
let currentPosition = 1;

function nextQuestion() {
  const answerInput = document.getElementById('answer-input');
  const nextBtn = document.getElementById('next-btn');
  const boy = document.getElementById('boy');
  const progressBar = document.getElementById('progress-bar');

  if (answerInput.value.includes('?')) {
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
      const gapWidth = progressBar.offsetWidth / totalQuestions;
      answerInput.value = '';
      currentPosition = currentQuestion; // Set position based on the current question
      boy.style.left = `${gapWidth * (currentPosition - 1)}px`;
    } else {
      document.getElementById('question').textContent = 'Congratulations! You reached the treasure!';
      answerInput.style.display = 'none';
      nextBtn.style.display = 'none';
      boy.style.left = progressBar.offsetWidth - boy.offsetWidth + 'px';
    }
  }
}

// Enable the next button only when '?' is present in the input
document.getElementById('answer-input').addEventListener('input', function () {
  const nextBtn = document.getElementById('next-btn');
  nextBtn.style.display = this.value.includes('?') ? 'inline-block' : 'none';
});