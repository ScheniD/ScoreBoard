// Function to increment the score for the specified team
function addScore(team) {
    const scoreElement = document.getElementById(`score-${team}`);
    let score = parseInt(scoreElement.textContent);
    score++;
    scoreElement.textContent = score;
  }
  
  // Function to reset both scores
  function resetScore() {
    document.getElementById('score-home').textContent = 0;
    document.getElementById('score-away').textContent = 0;
  }
  
  // Function to toggle between light and dark themes
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const themeButton = document.querySelector(".theme-switch button");
    if (document.body.classList.contains("dark-mode")) {
      themeButton.innerHTML = '<span class="icon"></span>Light Theme';
    } else {
      themeButton.innerHTML = '<span class="icon"></span>Dark Theme';
    }
  }