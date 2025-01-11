let timer;
let elapsedTime = 0;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedTime += 10;
      display.textContent = formatTime(elapsedTime);
    }, 10);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(timer);
  elapsedTime = 0;
  isRunning = false;
  display.textContent = '00:00:00';
  laps.innerHTML = '';
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = document.createElement('li');
    lapTime.textContent = formatTime(elapsedTime);
    laps.appendChild(lapTime);
  }
});

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = ms % 1000;

  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(Math.floor(milliseconds / 10)).padStart(2, '0')}`;
}
