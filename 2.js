document.addEventListener("DOMContentLoaded", function() {
    var chapterName = document.getElementById("chapterName");
    var container = document.getElementById("container");
    var startButton = document.getElementById("startButton");


    // Fade out chapter name
    setTimeout(function() {
      chapterName.style.opacity = 0;
    }, 1500);

    // Slide down chapter name
    chapterName.addEventListener("transitionend", function() {
      chapterName.style.display = "block";
      chapterName.style.opacity = 1;
      chapterName.style.top = "20px";
      chapterName.style.transform = "translateX(-50%) translateY(0)";
      chapterName.style.background = "#ffffff";
      chapterName.style.padding = "10px 30px";
      chapterName.style.color = "#000000"
      container.style.display = "block";
      // Show image and text, then start button
      setTimeout(function() {
        container.style.opacity = 1;
        setTimeout(function() {
          startButton.style.display = "block";
          startButton.style.opacity = 1;
        }, 1000); // Adjust timing based on your preference
      }, 500);
    });

    // Start lesson function
    function startLesson() {
      startButton.style.opacity = 0;
      container.style.opacity = 0;
      setTimeout(function() {
        container.style.display = "none";
        chapterName.style.display = "block";
        chapterName.style.opacity = 1;
      }, 1000); // Adjust timing based on your preference
    }
  });



  const textToType = "In this game, your goal is to move your avatar to the treasure chest in order to win. The method to do so is to break down the original question (Who are you?) into a chain of simpler questions (e.g. What is a human?). Enter your question into the test box and click Next. You have to list five different questions in order to reach the chest. Happy Thinking!";

  // Get the element where the text will be typed
  const typingTextElement = document.getElementById("textContainer");
  
  // Call the typeText function with the text to be typed
  typeText(textToType);
  
  function typeText(text) {
    let index = 0;
  
    // Use a recursive function with setTimeout for a more realistic typing effect
    function typeCharacter() {
      // Add one character at a time to the text content
      typingTextElement.textContent += text[index];
  
      // Move to the next character
      index++;
  
      // Check if all characters are typed
      if (index < text.length) {
        // Schedule the next character typing with a variable delay
        setTimeout(typeCharacter, Math.random() * 30 + 25); // Adjust the delay range
      }
    }
  
    // Start the typing process
    typeCharacter();
  }
  
  var buttonClicked = false; // Variable to track whether the button has been clicked

  function startLesson() {
      if (!buttonClicked) {
          // Get references to the elements
          var textContainerElement = document.getElementById("textContainer");
          var startButtonElement = document.getElementById("startButton");
          var chapterNameElement = document.getElementById("chapterName");
  
          // Hide the text container
          textContainerElement.style.display = "none";
  
          // Disable the button
          startButtonElement.disabled = true;
  
          // Make the title smaller
          chapterNameElement.style.fontSize = "20px";
          chapterNameElement.style.transition = "0.3s ease-in-out";
  
          // Update the button styles to make it disappear
          startButtonElement.style.display = "none";
          startButtonElement.style.opacity = "0";
  
          buttonClicked = true; // Set the flag to true

          setTimeout(function() {
            window.location.assign('3.html');
          }, 1000);
      }
  }
