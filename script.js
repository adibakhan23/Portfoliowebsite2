let countdownInterval;

function startCountdown() {
  if (countdownInterval) {
    alert("Countdown is already running!");
    return;
  }

  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
   const newYear = new Date("January 1, 2025 00:00:00").getTime();
 

  
  const now = new Date().getTime();
  const difference = newYear - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    alert("Happy New Year!");
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById("days").textContent = Math.floor(difference / day);
  document.getElementById("hours").textContent = Math.floor((difference % day) / hour);
  document.getElementById("minutes").textContent = Math.floor((difference % hour) / minute);
  document.getElementById("seconds").textContent = Math.floor((difference % minute) / second);
}

document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  document.getElementById("confirmation").style.display = "block";

  setTimeout(() => {
    document.getElementById("confirmation").style.display = "none";
  }, 3000);

  this.reset();
});
