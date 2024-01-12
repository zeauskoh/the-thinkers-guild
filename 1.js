document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('container');
    var character = document.getElementById('character');
    var textContainer = document.getElementById('text-container');
    var enterButton = document.getElementById('enter-button');

    var sentences = [
        "Hello there! I am Professor Z! Welcome to my Academy!",
        "In this Academy, I will teach you everything about philosphy!",
        "Are you ready? Let's begin!",
    ];

    var currentSentenceIndex = 0;
    var currentCharIndex = 0;

    function typeSentence() {
      if (currentSentenceIndex < sentences.length) {
        var currentSentence = sentences[currentSentenceIndex];
        var currentChar = currentSentence.charAt(currentCharIndex);

        textContainer.textContent += currentChar;

        currentCharIndex++;

        if (currentCharIndex === currentSentence.length) {
          enterButton.style.display = 'block';
        } else {
          setTimeout(typeSentence, 45);
        }
      }
    }

    enterButton.addEventListener('click', function () {
      currentSentenceIndex++;
      currentCharIndex = 0;
      textContainer.textContent = '';
      enterButton.style.display = 'none';

      if (currentSentenceIndex < sentences.length) {
        typeSentence();
      } else {
        container.style.animation = 'fadeOut 2s forwards';

        setTimeout(function() {
        window.location.assign('2.html');
        }, 1000);
      }
    });

    typeSentence();
  });