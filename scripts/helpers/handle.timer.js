import { gameOver } from '../utils/game.over.js';

const handleTimer = () => {
  if (!window.gameStart) {
    window.gameStart = new Date().getTime();

    document.getElementById('cursor').style.animation = 'none';
    document.getElementById('timer-picker').style.opacity = '0';
    document.getElementById('logo-container').style.opacity = '0.2';
    document.getElementById('restart-button-container').style.opacity = '0.5';
  }

  const timer = document.getElementById('timer');
  const gameTime = Number(timer.innerHTML) * 1000;

  window.timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const sPassed = Math.round((currentTime - window.gameStart) / 1000);
    const sLeft = gameTime / 1000 - sPassed;
    if (sLeft <= 0) {
      gameOver(gameTime);
      return;
    }
    timer.innerHTML = sLeft + '';
  }, 1000);
};

export { handleTimer };
