import { getWpm } from '../helpers/index.js';

const gameOver = (gameTime) => {
  clearInterval(window.timer);
  window.gameStart = null;
  document.getElementById('game-container').classList.add('over');
  document.getElementById('timer-info').innerHTML = `WPM: ${getWpm(gameTime)}`;
};

export { gameOver };
