document.addEventListener("DOMContentLoaded", function() {
    var chapterName = document.getElementById("chapterName");
    var container = document.getElementById("container");
    var textContainer = document.getElementById("textContainer");
    var startButton = document.getElementById("startButton");



        // Replace this with your actual lesson text
        var lessonText = "Your lesson text goes here.";

        // Function to simulate typing effect
        function typeText() {
          var index = 0;
          var typingInterval = setInterval(function() {
            textContainer.textContent += lessonText[index];
            index++;
    
            if (index === lessonText.length) {
              clearInterval(typingInterval);
              // Show start button after typing is complete
              setTimeout(function() {
                startButton.style.display = "block";
                startButton.style.opacity = 1;
              }, 500); // Adjust timing based on your preference
            }
          }, 50); // Adjust typing speed based on your preference
        }

        
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