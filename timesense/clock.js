running = false;

goBtn = document.getElementById("btn");
resultTxt = document.getElementById("result");
commentTxt = document.getElementById("comment");
goBtn.addEventListener("click", (e) => {
  timerToggle();
});

function timerToggle() {
  if (!running) {
    startTime = new Date().getTime();
    resultTxt.textContent = "Running..";
    goBtn.textContent = "Stop!";
    running = true;
  } else {
    stopTime = new Date().getTime();
    let result = stopTime - startTime;

    running = false;

    function evaluation(result) {
      if (result === 10000) {
        return "Absolutely incredible! You are a human clock. Screenshot this!";
      } else if (result > 9900 && result < 10100) {
        return "Fantastic, you have a great sense of time. Good job.";
      } else if (result > 9800 && result < 10200) {
        return "A very strong score. A solid sense of time.";
      } else if (result > 9700 && result < 10300) {
        return "Very well done. You have a well above average sense of time.";
      } else if (result > 9600 && result < 10400) {
        return "A strong score. Your sense of time is above average.";
      } else if (result > 9500 && result < 10500) {
        return "A solid score. You have a good sense of time";
      } else if (result > 9400 && result < 10600) {
        return "A decent score. Your sense of time is perfectly fine.";
      } else if (result > 9300 && result < 10700) {
        return "An average score. Most people will fall within this level of accuracy.";
      } else if (result > 9200 && result < 10800) {
        return "Slightly weak score. Your sense of time is marginally below average, maybe give it another shot?";
      } else if (result > 9100 && result < 10900) {
        return "Not the best score. Try again, you can get closer than this.";
      } else if (result > 9000 && result < 1100) {
        return "Somewhat weak score, you are nearly a full second off. Recalibrate your mind, focus, and try again.";
      } else {
        return "Not close... Focus up and try to get within 1 second";
      }
    }
    let comment = evaluation(result);
    resultTxt.textContent = `${result.toLocaleString()} seconds`;
    commentTxt.textContent = `${comment}`;
    goBtn.textContent = "Start!";
  }
}
