function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10)
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

function endTimer(display) {
  display = document.querySelector("#display").value;
  if (display <= 0) {
    var audio = new Audio('./sounds/alarm.mp3');
    audio.play();
  }
}

function pomodoroStart() {
  var pomodoro = 60 * .15,
  display = document.querySelector("#display");
  startTimer(pomodoro, display);
}




