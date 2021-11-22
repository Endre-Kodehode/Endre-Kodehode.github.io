// let balloon = document.getElementById("balloon");

// balloon.style.animation = "inflating 2s";

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

let score = 0;
const scoredisplay = document.getElementById("score");
scoredisplay.innerHTML = "Score: " + score;
let gmenu = document.getElementById("gamemenu");

let scorescreen = document.getElementById("scorescreen");
scorescreen.style.display = "none";
let result = document.getElementById("result");

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function makeBalloon() {
  balloon = document.createElement("div");
  balloon.id = "balloon";
  document.getElementById("gamewindow").appendChild(balloon);
  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  randomTop = getRandomNumber(100, winHeight * 0.8);
  randomLeft = getRandomNumber(0, winWidth * 0.8);
  //   console.log(randomTop + " random height placement");
  //   console.log(randomLeft + " random width placement");
  let diff = document.querySelector('[name="difficulty"]:checked');
  if (diff.value == "easy") {
    balloon.style.setProperty("--diff", 40 + "px");
  } else if (diff.value == "medium") {
    balloon.style.setProperty("--diff", 15 + "px");
  } else if (diff.value == "hard") {
    balloon.style.setProperty("--diff", 5 + "px");
  }

  balloon.style.top = randomTop + "px";
  balloon.style.left = randomLeft + "px";

  balloon.addEventListener("click", function () {
    score += 1;
    scoredisplay.innerHTML = "Score: " + score;

    this.remove();
    makeBalloon();
  });
}

let timeLeft = 30;
const elem = document.getElementById("timer");
elem.innerHTML = timeLeft + " seconds remaining";
function startTimer() {
  let timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == -1) {
      clearTimeout(timerId);
      gameEnd();
    } else {
      elem.innerHTML = timeLeft + " seconds remaining";
      timeLeft--;
    }
  }
}

function start() {
  if (gmenu.style.display === "none") {
    gmenu.style.display = "block";
  } else {
    gmenu.style.display = "none";
  }

  makeBalloon();
  startTimer();
}
function gameEnd() {
  if (scorescreen.style.display === "none") {
    scorescreen.style.display = "block";
  } else {
    scorescreen.style.display = "none";
  }
  result.innerHTML = "Game over! <br> You scored " + score;
  balloon.remove();
  console.log("game over");
}
function restart() {
  location.reload();
}
