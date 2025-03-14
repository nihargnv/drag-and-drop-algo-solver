
const timeBox = document.getElementById("timer");
let timer=null;
let time = 0, timeLeftMin, timeLeftSec;

function start(){
    startTimer(120)
}

function startTimer(duration) {
  time = duration;
  timer = setInterval(updateTime, 1000);
}

function updateTime() {
  if (time > 0) {
    time -= 1;
    timeLeftMin = Math.floor(time / 60);
    timeLeftSec = time - timeLeftMin * 60;
    let strTime = `${String(timeLeftMin).padStart(2, "0")}:${String(
      timeLeftSec
    ).padStart(2, "0")}`;
    timeBox.innerText = strTime;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timer);
  checkAnswers();
  gameActive = false;
  timeBox.innerText = "Time's up!";
}
