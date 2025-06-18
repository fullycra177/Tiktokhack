let countdown = 30 * 60;
const timerEl = document.getElementById('timer');

function updateTimer() {
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  timerEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  if (countdown > 0) {
    countdown--;
    setTimeout(updateTimer, 1000);
  } else {
    document.getElementById('payment-section').classList.remove('hidden');
  }
}

function fakePayment() {
  document.getElementById('payment-section').classList.add('hidden');
  document.getElementById('payment-status').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('payment-status').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('final-disclaimer').classList.remove('hidden');
  }, 3000);
}

updateTimer();
