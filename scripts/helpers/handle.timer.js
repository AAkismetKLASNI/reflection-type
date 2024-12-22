import { gameOver } from '../utils/game.over.js';

const handleTimer = (gameTime) => {
  if (!window.gameStart) {
    window.gameStart = new Date().getTime();

    document.getElementById('cursor').style.animation = 'none';
  }

  window.timer = setInterval(() => {
    const currentTime = new Date().getTime();
    const sPassed = Math.round((currentTime - window.gameStart) / 1000);
    const sLeft = gameTime / 1000 - sPassed;

    if (sLeft <= 0) {
      gameOver(gameTime);
      return;
    }

    document.getElementById('timer-info').innerHTML = sLeft + '';
  }, 1000);
};

export { handleTimer };
